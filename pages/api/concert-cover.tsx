import { ImageResponse, NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function concertCover(req: NextRequest): ImageResponse | void {
  try {
    const { searchParams } = new URL(req.url);
    const { artist, venue, date, img, width, height } =
      Object.fromEntries(searchParams);

    return new ImageResponse(
      (
        <div style={{ display: "flex", position: "absolute" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            width={width || 630}
            height={width || height || 630}
            alt={artist}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              color: "white",
              letterSpacing: -2,
              fontWeight: 700,
              textShadow: "0 0 10px black",
              background:
                "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                marginBottom: 30,
                marginLeft: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 60,
                }}
              >
                {artist}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 40,
                }}
              >
                {venue}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                }}
              >
                {date}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: Number(width) || 630,
        height: Number(width) || Number(height) || 630,
      }
    );
  } catch (e) {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
