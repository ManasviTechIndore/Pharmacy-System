import mongoose from "mongoose";
// import supplierModel from "./supplierModel.js";
// import medicineModel from "./medicineModel.js";

const salesEstimateSchema  = new mongoose.Schema({
    date:{
        type:Date,
        default: Date.now(),
        // required:true,
    },
    EstimateNo:{
        type:String,
        unique:true
        // required:true,

    },
    customerName:{
     type:mongoose.Schema.Types.ObjectId,
      ref:"Supplier",
    //  required:true,
    },
    placeOfSupply:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
    },
    paymentTerm:{
        type:Date,
        default:Date.now(),
        // required:true,
    },
    dueDate:{
        type:Date,
        // required:true,
    },

   transPortDetails:{
    ReceiptNo:{
        type:String,
        //  required:true,
    },
    dispatchedThrough:{
        type:String,
        // required:true,
    },
    destination:{
        type:String,
        // required:true,
    },
    carrierName:{
        type:String,
        // required:true,
    },
    billOfLanding:{
        type:String,
        // required:true,
    },
  motorNo:{
    type:String,
    // required:true,
  },


   },
   billingAddress:{
    type:String,
    // required:true,
   },
   reverseCharge:{
    type:String,
    enum:["Yes", "No"],
    // required:true,
   },

   purchaseTable:[{
    itemCode:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Medicine",
        // required:true,

    },
    productName:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Medicine",
        // required:true,
    },
    quantity:{
        type:Number,
        // required:true,
    },
    mrp:{
        type:Number,
        // required:true
    },
     retailPrice:{
        type:Number,
     },

    }],
    taxableValue:{
        type:Number,
        // required:true,
    },
    cGst:{
        type:String,
        // required:true,
    },
    sGst:{
       type:String,
    //    required:true,
    },
    iGst:{
        type:String,
        // required:true,
    },
    totalValue:{
        type:Number,
        // required:true,
    },
   

   amounts:{
    grossAmount:{
        type:Number,
        // required:true,
    },
     gstAmount:{
        type:Number,
        // required:true,
     },
     otherCharge:{
        type:Number,
        // required:true,
     },
     netAmount:{
        type:Number,
        // required:true,
     },
   },
   Narration:{
    type:String,
   },
},{timestamps:true})

const SalesEstimate = mongoose.model("SalesEstimate", salesEstimateSchema);
export default SalesEstimate;
