import {insertDuyuru, insertUser, showUserInfo, deleteUserModal, deleteDuyuruModal, updateAllUser, updatePasswordUser, insertGider, deleteGiderModal, insertYazilacak, showYazilacakInfo, adiatEkle, aidatGetir, aidatGuncelle, showGiderInfo} from "../model/userModel.js";


export const addUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı eklekrne hata  Oluştu"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla oluşturuldu",
                "id": results.insertId
            });
        }
    });
}
export const addAidat = (req, res) => {
    const data = req.body;
    adiatEkle(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı eklekrne hata  Oluştu"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla oluşturuldu"
            });
        }
    });
}

export const getAidat = (req, res) => {
    aidatGetir(req.params.id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"hata"
            });
        }else{
            res.json({
                "value":true,
                "data":results
            });
        }
    });
}

export const showUser = (req, res) => {
    showUserInfo(req.body.username, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"hata"
            });
        }else{
            res.json({
                "value":true,
                "data":results
            });
        }
    });
}

export const updatePassword = (req, res) => {
    const data = req.body;
    showUserInfo(data.id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"hata"
            });
        }else{
            console.log(results.password);
            console.log(data.cpassword);
            if (results.password === data.cpassword) {
                updatePasswordUser(data, (err, results) => {
                    if (err){
                        res.json({
                            "value":false,
                            "message":"Kullancıı değişikleiri olmadı"
                        });
                    }else{
                        res.json({
                            "value":true,
                            "message":"Başarıyla değişitirldi"
                        });
                    }
                });
            }
            else {
                res.json({
                    "value":false,
                    "message":"ssss hata"
                });
            }
        }
    });
}

export const updateAidat = (req, res) => {
    const data = req.body;
    aidatGuncelle(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı değişikleiri olmadı"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla değişitirldi"
            });
        }
    });
}

export const updateUser = (req, res) => {
    const data = req.body;
    updateAllUser(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı değişikleiri olmadı"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla değişitirldi"
            });
        }
    });
}
export const deleteUser = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    deleteUserModal(id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı silinemedi"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla silindi"
            });
        }
    });
}
export const addDuyuru = (req, res) => {
    const data = req.body;
    insertDuyuru(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"duyuru eklerken hata  Oluştu"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla oluşturuldu"
            });
        }
    });
}
export const deleteDuyuru = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    deleteDuyuruModal(id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı silinemedi"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla silindi"
            });
        }
    });
}
export const addGider = (req, res) => {
    const data = req.body;
    insertGider(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"gider eklerken hata  Oluştu"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla oluşturuldu"
            });
        }
    });
}
export const deleteGider = (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    deleteGiderModal(id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı silinemedi"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla silindi"
            });
        }
    });
}
export const showGider = (req, res) => {
    showGiderInfo(req.params.id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"hata"
            });
        }else{
            res.json({
                "value":true,
                "data":results
            });
        }
    });
}
export const addYazilacak = (req, res) => {
    const data = req.body;
    insertYazilacak(data, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"Kullancıı eklekrne hata  Oluştu"
            });
        }else{
            res.json({
                "value":true,
                "message":"Başarıyla oluşturuldu"
            });
        }
    });
}
export const showYazilacak = (req, res) => {
    showYazilacakInfo(req.params.id, (err, results) => {
        if (err){
            res.json({
                "value":false,
                "message":"hata"
            });
        }else{
            res.json({
                "value":true,
                "data":results
            });
        }
    });
}