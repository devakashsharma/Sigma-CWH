import fs from "fs/promises"
import fSys from "fs"
import path from "path"

const basepath = "c:\\Users\\soula\\VS Code Files\\Sigma-CWH\\Day 91 - Exercise - 15";

let files = await fs.readdir(basepath);

for (const item of files) {
    let xtension = item.split(".")[item.split(".").length - 1]
    // console.log(xtension)
    if (xtension != "js" && xtension != "json" && item.split(".").length > 1) {

        if(fSys.existsSync(path.join(basepath, xtension))) {
            fs.rename(path.join(basepath, item), path.join(basepath, xtension, item))
            
        } else {
            fs.mkdir(xtension)
            fs.rename(path.join(basepath, item), path.join(basepath, xtension, item))
        }
    }
    console.log(item);
}
