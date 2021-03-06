const router = reqire("express").Router();
const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(process.env.FLUTTER_KEY_PUBLIC, process.env.FLUTTER_KEY_PRIVATE);

const ug_mobile_money =  async () =>{
 
    try {

        const payload = {
            "tx_ref": "MC-1585230950508",
            "amount": "1500",
            "email": "olufemi@flw.com",
            "phone_number": "054709929220",
            "currency": "UGX",
            "fullname": "Olufemi Obafunmiso",
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
            "voucher": "128373", //This is the voucher code generated by the customer. It is meant to be passed in the initial charge request. (only for Vodafone cash)
            "network": "MTN"
        }

       const response =  await flw.MobileMoney.uganda(payload)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 
ug_mobile_money();

module.exports = router;



