import { ImageResponse } from "next/og";

export const alt = "SouJunior — Apoie quem está construindo o futuro na tecnologia";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0A1662",
          backgroundImage: "radial-gradient(circle at 50% 20%, #0E14BF 0%, #0A1662 85%)",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
        }}
      >
        {/* Topo: Tag de Financiamento Coletivo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "9999px",
            padding: "10px 24px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#FACC15",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#F0E9FD",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Campanha Oficial Apoia.se — SouJunior
          </span>
        </div>

        {/* Centro: Título e Mensagem de Destaque */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "44px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            <span>Quem está começando hoje pode</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#FACC15" }}>transformar</span>
              <span>a tecnologia amanhã.</span>
            </div>
          </div>

          <p
            style={{
              fontSize: "20px",
              color: "#E7E8EA",
              lineHeight: 1.4,
              margin: 0,
              opacity: 0.9,
              maxWidth: "840px",
              textAlign: "center",
            }}
          >
            Apoie nossa comunidade tech a partir de R$ 2/mês e impulsione talentos em início de carreira.
          </p>
        </div>

        {/* Rodapé: Logo e Informações de Apoio */}
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
              }}
            >
              SouJunior
            </span>
            <span style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.6)" }}>
              | Mais do que um apoio, uma comunidade
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FACC15",
              color: "#1D1B1B",
              fontSize: "20px",
              fontWeight: 800,
              padding: "12px 28px",
              borderRadius: "14px",
            }}
          >
            apoia.se/soujunior
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
