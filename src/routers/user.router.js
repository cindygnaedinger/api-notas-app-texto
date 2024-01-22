import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
    res.send("ruta de creación de usuario")
})

export default router;