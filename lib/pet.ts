import { ASSETS } from "@/lib/assets";

export function getPetState(commits: number){
    if (commits === 0){
        return{
            asset: ASSETS.sleepingPikachu,
            x: 60, 
            y: 120, 
            width: 250, 
            height: 250,
        };
    }

    return{
        asset: ASSETS.awakePikachu,
        x: 100,
        y : 140, 
        width: 170,
        height: 170, 
    }
}