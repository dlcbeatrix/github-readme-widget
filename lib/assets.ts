import fs from "fs";
import path from "path";

function toBase64(filePath: string){
    const file = fs.readFileSync(filePath);
    return `data:image/png;base64,${file.toString("base64")}`;

}

export const ASSETS = {
    sleepingPikachu : toBase64(path.join(process.cwd(), "public/assets/sleeping_pikachu.png")),
    awakePikachu: toBase64(path.join(process.cwd(), "public/assets/awake_pikachu.png")),
    lighting: toBase64(path.join(process.cwd(), "public/assets/lighting.png"),)
};

