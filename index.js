export default async function handler(req, res) {

    const uuid = crypto.randomUUID();
    const { cc } = req.body;

    let SERVER = "";
    let PATH = "";
    let LABEL = "";

    // 🇮🇩 Indonesia
    if (cc === "ID") {
        SERVER = "#";
        PATH = "#";
        LABEL = "Lightnode Limited 🇮🇩";
    }

    // 🇸🇬 Singapore
    else if (cc === "SG") {
        SERVER = "#";
        PATH = "#";
        LABEL = "Alibaba Cloud SG 🇸🇬";
    }

    // 🇲🇾 Malaysia
    else if (cc === "MY") {
        SERVER = "#";
        PATH = "#";
        LABEL = "Kaopu Cloud HK Limited 🇲🇾";
    }

    // 🇰🇷 Korea
    else if (cc === "KR") {
        SERVER = "#";
        PATH = "#";
        LABEL = "Akamai Connected Cloud Linode 🇰🇷";
    }

    // 🇺🇸 USA
    else if (cc === "US") {
        SERVER = "#";
        PATH = "/47.253.87.21-52315";
        LABEL = "Alibaba Cloud US 🇺🇸";
    }

    // 🇯🇵 Japan
    else if (cc === "JP") {
        SERVER = "#";
        PATH = "#";
        LABEL = "Alibaba Cloud JP 🇯🇵";
    }

    const vless =
`vless://${uuid}@${SERVER}:443?encryption=none&type=ws&host=${SERVER}&path=${PATH}&security=tls&sni=${SERVER}#${LABEL}`;

    res.json({
        uuid,
        vless,
        path: PATH,
        server: LABEL
    });
}

export const config = {
    runtime: "nodejs"
};