import express from "express";
const router = express.Router();
// import multer from "multer";
// const upload = multer({ dest: 'uploads/' })

import { register,loginUser } from "../controller/user.js";
// import { vehicle} from "../controller/vehicle.js";
// import { InventoryAdd } from "../controller/InventoryAdd.js";
// import { ItemSell } from "../controller/ItemSell.js";
// import { RevenueCount } from "../controller/RevenueCount.js";
// import { summary } from "../controller/summary.js";
// import { RevenueSummary } from "../controller/RevenueSummary.js";
// import { Faq } from "../controller/faq.js";
// import { InventorySummary} from "../controller/InventorySummary.js";
// import { drowsy} from "../controller/drowsy.js";
// import { startmaps} from "../controller/startmaps.js";
// import { MAGMaster} from "../controller/MAGMaster.js";
// import { WAGMaster} from "../controller/WAGMaster.js";
// import { MAGMasterConsole} from "../controller/MAGConsolidated.js";
// import { WAGMasterConsole} from "../controller/WAGConsolidated.js";
// import { magmasterget} from "../Controller/MAGMasterget.js";
// import { wagmasterget} from "../Controller/WAGMastergett.js";
// import { magmastergetconsole} from "../Controller/MAGMastergetconsole.js";
// import { wagmastergetconsole} from "../Controller/WAGMastergetconsole.js";

/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/*Login User */
router.post("/api/loginUser", loginUser);

// /* MAG MASTER Insert */
// router.post("/api/MAGMaster", MAGMaster);

// /* WAG MASTER  Insert */
// router.post("/api/WAGMaster", WAGMaster);

// /* MAG MASTER Consolidated insert*/
// router.post("/api/MAGMasterConsolidated", MAGMasterConsole);

// /* WAG MASTER Consolidated insert*/
// router.post("/api/WAGMasterConsolidated", WAGMasterConsole);

// /* MAG MASTER Get APi */
// router.get("/api/MAGMasterget", magmasterget);

// /* WAG MASTER Get APi */
// router.get("/api/WAGMasterget", wagmasterget);

// /* MAG MASTER Get Consolidated */
// router.get("/api/MAGMasterGetConsolidated", magmastergetconsole);

// /* WAG MASTER Get Consolidated */
// router.get("/api/WAGMasterGetConsolidated", wagmastergetconsole);

// /* Vehicle Expenditure */
// router.post("/api/vehicleexpense",upload.single('file'), vehicle);

// /* Inventory Add */
// router.post("/api/InventoryAdd",upload.single('file'), InventoryAdd);

// /* Item Sell Add */
// router.post("/api/ItemSell", upload.single('file'),ItemSell);

// /* Revenue Count */
// router.post("/api/RevenueCount", upload.single('file'),RevenueCount);

// /* Summary Get APi */
// router.get("/api/Summary", summary);

// /* Inevntory Summary Get APi */
// router.get("/api/InventorySummary", InventorySummary);

// /* revenue Get APi */
// router.get("/api/RevenueSummary", RevenueSummary);

// /* FAQ Get APi */
// router.post("/api/Faq", Faq);

// /* Drowsy Detect */
// router.post("/api/drowsy", drowsy);



// router.post("/api/StartMaps",startmaps);


export default router;
