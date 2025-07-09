import { db } from "../db.js";

const isValidEmailType = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const addTPO = async(req,res) => {
    try {
        const { name, college, email, contact } = req.body;
        // email = req.body.email?.trim().toLowerCase();
        // name = req.body.username?.trim();
        // college = req.body.college?.trim();
        if(!name || !college || !email || !contact){
          return res.status(400).json({
            error: "Missing filed found!!",
          });
        }

        if(!(/^[0-9]{10}$/.test(contact))){
            return res.status(400).json({ error: "Invalid contact number. Must be 10 digits only." });
        }
    
        if(!isValidEmailType(email)){
          return res.status(400).json({ error: "Invalid email format" });
        }
    
        const [existingUser] = await db.execute(
          "SELECT * FROM tpo_dataentries WHERE email = ?",
          [email]
        );
    
        if (existingUser.length > 0) {
          return res.status(400).json({ error: "tpo already exists" });
        }

        await db.execute(
          "INSERT INTO tpo_dataentries (name, college, email, contact) VALUES (?, ?, ?, ?)",
          [name, college, email, contact]
        );
    
        return res.status(201).json({ message: "tpo registered successfully" });
    
      } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
}

const searchTPO = async(req,res) => {
    
    try {
        
        const {name, email, college} = req.body;
        const searchField = name ? "name" : (email ? "email" : (college ? "college" : null))
        const searchValue = name || email || college || null;
        const [Availtpo] = await db.execute(`SELECT * FROM tpo_dataentries WHERE ${searchField} = ? `,[`${searchValue}`])    
        if(Availtpo.length === 0){
            return res.status(400).json({
                Error:"No Data Found!!"
            })
        }
        // exclude id and created_at field
        const filteredResults = Availtpo.map(({ id, created_at, ...rest }) => rest);
        return res.status(200).json({ result: filteredResults });
        // include all fileds 
        return res.status(200).json({result : Availtpo})
        
    } catch (error) {
        console.error("Search Error:", error);
        return res.status(500).json({ error: "Internal Server Error in searching tpo" });
    }
}

export default {addTPO,searchTPO}