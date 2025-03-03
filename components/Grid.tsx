import { PropsWithChildren, ReactElement } from "react";

interface IGridProps {
  minWidthItem?: string;
  maxWidthItem?: string;
  marginTop?: string;
  marginBottom?: string;
}

export default function Grid({
  children,
  minWidthItem = "180px",
  maxWidthItem = "1fr",
  marginTop = "20px",
  marginBottom = "0px",
}: PropsWithChildren<IGridProps>): ReactElement {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(${minWidthItem}, ${maxWidthItem})
          );
          grid-gap: 24px;
          justify-content: space-between;
          margin-top: ${marginTop};
          margin-bottom: ${marginBottom};
          grid-template-rows: auto;
          transition: 400ms ease-in;
        }
        @media (max-width: 420px) {
          div {
            grid-template-columns: repeat(
              auto-fill,
              minmax(calc(${minWidthItem} - 20px), 1fr)
            );
          }
        }
      `}</style>
    </div>
  );
}
