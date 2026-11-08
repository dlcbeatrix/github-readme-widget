import { getGitHubStats } from "@/lib/github";
import { getPetState } from "@/lib/pet";
import { ASSETS } from "@/lib/assets";

export async function GET() {
    const stats = await getGitHubStats("dlcbeatrix");
    const pet = getPetState(stats.currentStreak);

    const svg = `
    <svg
        width = "430"
        height = "430"
        xmlns="http://www.w3.org/2000/svg"
    >
    <rect
        width = "100%"
        height = "100%"
        fill = "none"
    />
    <image
        href="${pet.asset}"
        x="60"
        y="180"
        width="250"
        height="250"
    />
    <image
        href="${ASSETS.lighting}"
        x="75"
        y="-50"
        width="290"
        height="285"
        preserveAspectRatio = "none"
    />
    <text
        x="165"
        y="80"
        fill = "black"
        font-size = "16"
        font-weight = "bold"
        font-family = "Arial, sans-serif"
        text-anchor = "middle"
    > Commit Streak </text>
    
    <text
        x="165"
        y="105"
        fill = "black"
        font-family = "Arial, sans-serif"
        text-anchor = "middle"
    >
        <tspan font-size = "16" font-weight = "bold">
            ${stats.currentStreak}
        </tspan> 
        <tspan font-size = "16" font-weight = "bold">
        Days
        </tspan>
    </text>
    </svg>
    `;

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
        },
    });
}