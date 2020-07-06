import React, { useState } from "react";

import useInterval from "../../../../../utils/useInterval";

export const UserStandUp = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect
        x="14"
        y="5"
        width="28"
        height="47"
        fill="url(#patternKateStandUp)"
      />
      <defs>
        <pattern
          id="patternKateStandUp"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageKateStandUp"
            transform="scale(0.0357143 0.0212766)"
          />
        </pattern>
        <image
          id="imageKateStandUp"
          width="28"
          height="47"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAvCAYAAADw46qXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASlSURBVHgBnVjPa1RXFL4zDTWl0FipYH9horUmCG0SumlW8QlN01KwLkoVEYIbUREFd/4DblwoBrIy4MJfoGSj4sJRXCQ7RwVxFHEiRo34IypIyELj+86b78559937ZsYPwntz37nfd75z7zv3acG0iN4lZnGgK7mfrBpzY8EUWpnfVDBEcKVQf58x18v15xAGmhFva1YIInZ8KPm7ccmZUE3i84SLeWIQ8on98n8ihnuAzxnPRH1oyxPTZCSHmBZ2gVLL3Nitz2nQoSuWIi9sTsXhGcus3fqcFvPcacJbp9JjXD8mwuu28XzRYjPutIgIL56s71LlVpdbr3tDQR3srpN2G7qyxOBxq+UVZPbWXewC7jAOUiYhZY3dErYCDo9Gapd2r+hcNHPTqQARUHtEv3sg7D2VjCEJLcA4NoWMQ4htXP+zcUEXvmy1cGZOjCcdv5k/N/2RGHEFge87PjPbR4bt72MHjXWpybVL3jNGXA8l1w19y4XT65B4/Oa9nQgcPZctj3bEe8S45SNXrqAPECWZe3WFQ+KE3TSV2enC6ETykkZL/cHY4i4Rfrtbn+ITV+5Z7oygftA+l3QbkvuEXPieayGvoA9u9qHxUJyL4Lnl66ka7EYon1vWvC+BhptGtznch3qkRl6iXkG6I7kWYrvTTX33pmwioUM4I6i7Aok1ORPgM33Vz5GwywVkNk173Eu1O31auN8weNZ/KRnHOWhG0u9ju9OXgZRDnzvg+EhyBVnqpHDAIwlxIZfeNewZrPfTvb11N5qYRxWT0sdW3sZKnRb7109L875z9aKMoXljspA63zF0qR2jEkxgvmNY5nav/CZ8WiCIgIOhfWP1h/ERBQL320a7pPCJZ5E0bvDhxMg4RAbIBGCHr3wXJc63jltiuub6uUcVY2X+g1eWS7usl3TVMrP2hy8lsPS605RKpcLh02ds1vzEIA6UplKiWgxzKw9fCBc4wW0d0t1gf3+SWRyo8XJmwSwfHBNiigwfmkqJQgxx+EM5rcsaF7jpUhyizsWF+9a+D1sOjZtquWJF9HgI5AI319KW9MOSn+S6859OCYyiSGo+83TWOgUgSvCezxiLueAAl+YGpNNgcdfWHNLx6MQds+HI3+bs2DXTCnp29JjLe86bfzf22DE45AYSQSxutO4rG3C5/DxF0PVjE0dEjOqjcooDG4aAhojjVMbilm6/lYG7M+8yG0cTNSMmAjEHuABwy66Ntewh6evsKCnclc6MmqeV12Zg5C+v2OT4BfNt91IT/bdLhFFSF/zcaHMHfAmACKIgni+n8/qir2DFfAIuck/86tSkve/6fUCISUZCjOGZb05LgiB8cHIuNaaJQ2OYE3KXK0hwMyBzlNQFxuiqmc0VzARryPUhfNkjbtXmr+1vbC6sc8hlW0hM2lL86nTPLrP/IBk1c75wMzy/Qq54uT9/FceulJ+Ln/QhDDG+wLXeaImYWP0Fj9/hBnxBQR4pa1b/aj6YpD1hzG0KjEO/XLMaLq/LbzeOKDZy1yoazfE6RMkmrpjaV8BNKZm0p1o/TMXWxqJ196WVoYeyjfm4c/8zztfu8jpSKEbjIxdEa58RMsvfAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export const UserUp = () => {
  const [state, setState] = useState(0);

  useInterval(() => {
    setState((state + 1) % 2);
  }, 300);

  switch (state) {
    case 0:
      return <UserUp1 />;
    case 1:
    default:
      return <UserUp2 />;
  }
};

function UserUp1() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect x="16" y="5" width="24" height="48" fill="url(#patternKateUp1)" />
      <defs>
        <pattern
          id="patternKateUp1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageKateUp1"
            transform="scale(0.0416667 0.0208333)"
          />
        </pattern>
        <image
          id="imageKateUp1"
          width="24"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ1SURBVHgBlVjPa1VHFD7v9oIBIbZiUNpCNf2VVrCJlEJd6SskzaJQXJRaSiG0q7aIgjv9A1zoQlBxpeDCX6AGXIgLE1dmZ1RQnxLyIkaNGA0KIhH0eb8z+e49d+7cm5cPLjNv5sz3nXNm5kxITdpE7zJpbVrn+lebItfnpdbOutpipGhJvLFP5Np4Ng8hoEosXowYpOn4gPuuX/IWNJ19SCgKkYM4RL7hd0eOPiOiI/joWGkENs9cTDKQWyEfSJ2uTaKxkUQSgCXPkdW25ewwx7TZaGwkUch7S3DzVH6M+acw27+OhUWiKu8tqQq1TmanyERj02f3rSBgJ/0822jKWqYMPMxGToDepd4nXsJ7jIOEopqmJJpChB4PoKeoZ83alsxNWS1HaPbUnn0Q9J5yYxC1hLTjJYxA/uuWr8QHvbSLffhzJH+04nv5eWu/Oq4p+mTFB/L30GBqeHRvFoUls1GwTxuNasC1P/V1KadGwAUPX7xNDYGD54rhWo/Zhw3nfa6cQAgQ4WK/9YXKxOLGzFTt0LC7FPUPJQgcOX8hfvsXk2LDo/e0BXfMDtqOOXebSRYi9hGaJ59GULbQ965svMyOKNTvUE2y4G1HOvw0hV66aDEi9v0aE0LIsZwAvSeZJWb5sEXw/61FYf/RKY2Add6iSozzcFBLzwLiMu9tNfXfYMxtvOTG8Q7IUP4+dJi6FpV5Dxwfci0W5yppwJ5/cfhRqAB/fLM5q0c7ejNvLRFLN52wZTx0EFRg15YprX53rlzUQRQ7GCuJ9w4zChsRIqXghPTnhFRg3+jadAAeDuw8klkkJRsL/LfZRkGhE0/qqUjPZ6uycm3R2dcvB06fkZ4/j6VEjIr590s3bR/dntQyzVKdRgBgEHvQmHyuv59NzysJn0xi98hYTqRr8xG19dHTvdIJIAyE8/Wny/WzwGIQ/bHfeTi4fywnQs8BpsdHZNWAl8s7tZ1+PKMt94MiQHO8ob/pOW0//rY7dZSZiJke4ofVsdbzs7I0dHw3J5Mn52Rktbu7jfuz2XsAvFv2hUTzE1Jf35mor5JGsmH/nN/TFnnzwbg0x65q3z42aDVFfEMhAuDR5sJ2yIF1P25KiQsPDvJVXz+hA4cvTGWLE6/wcXGBfMHrsnkVWFBrjdxaqemB94eG7wSJkGOie9tH2tZ/+y+XooIAwxoelVbytQVLTkDcpiYnQBH2eTfeyFtpB2XeA5V/FxHIsZ/nqrxbxFWTG2a6dF/k3hO5O/1KLgdskP+y9FQK4HaDnEdX5EaeuCItFm2lyAKe8jTxGGPT7TtsEZeR4FThRv/7i7j0jD/N2Qy+XqMtLinuEQ5FgpafqrjKUyzYfnA2N2arr8MraUg5Kje5bONYfbE/X36OKK45+/uzBdsl70EIqMYocpUXbSlgrUf9Cu2PRVv/kvEROjFl6XwPfrEa4fzpGnoAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

function UserUp2() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect x="16" y="5" width="24" height="48" fill="url(#patternKateUp2)" />
      <defs>
        <pattern
          id="patternKateUp2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageKateUp2"
            transform="scale(0.0416667 0.0208333)"
          />
        </pattern>
        <image
          id="imageKateUp2"
          width="24"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ1SURBVHgBpVc7aFRBFJ1dFxQE4y8oftDEX6KgUUTQSlcwBhE/haiIIDaiFgp2thY2FooRC1Gw8AdKQEEsXMUi6YwKaghhE/EX8RO1kRRmfefOnvfum53Z3eCBzcybuXPOvXdm7pCMqRNtE01pQ5Ptdw8a82LUZOpZl6lFipbEa1Yb87w3mYcQUE0sV4sYpPF4u/29eOQsGLT2PqGsjxzEPvKVey05+oyIjuBHx4IR6DxzMclAroVcIHWyNopGR5I1HmjyFFlmX8oOc0ybjkZHkvV5rwle3UqPMf8UZnvwml8kW817TSpCpZvJKVLR6PTpfasQ0JNunnU0oZYpAw+zkRKgd7H3kZfwHuMgoaikKYqmIkKHB5BT1DJ7YcmMDGktS6j2VJ99ELTdsmMQ1YS04yXMgnznpqXGBb3Ui124cyT/1LDWbN29RRyXFM1tmGAOH+qIDa+eTaLQZDoK9mkjUbXbdvPqRuGUCLjg46+/sSFw8V5luNpj9mHDeZcrJeADRLjYbV2hkFiub3go09llL0V+qvECR85diG/3YlKs60m/tODOsYN20oi9zSTzEbvwzZNPIggtdL0LjYfsiIr67atJGrztSIebJt9Ll61FxL5bY3zwOZYSoPck08QsH7oIHt9dKew+OrGAlAtt2J4mo2BIjPNuFLHApKgWae9RY1gdXWAcdjj3+h3wRZENeQ9cP2RbbGiqkjpgiYadG0VqD1o3JvXoRFvirSZi6aYTuozrSOi0CJzaNCTV7+3ThzKJYgdjIXHeYUahI0KkFPzT0JESknL9oLg2HoCH7ScvJxZRycYC923WUVDoxpe89AfMlkSAHZbXws+F5vztO6blwLWYiFEx/27ppu26WZWFwW5y83T50Hvw/cOokPDJJE4XelIijRsviy3QV/yRcjYWCAGLQbT/nPWw41xPSoSeA0zPsnmT5deyYGbyokGZE3OWN4vhh8/D0nI/KAIM9vbJNz2n7e/JU2IbZiVXLq2lwms78OlN0TTvm2buPntmxgOs02870xS/B11P0jWk9UiraZpfR4WLcGXXGUlJfoWNYGzi4ujvS+nHewARPhRN6zfI2OD73prktMFDn5An73Ku6uKebvlR0DdPPO79Kr+j28sOl09ULrQQpPk9x0zhTqd8F2+OxPPYIxd9776ZYztbpV94/Vu+kRHvvz44XpsvbIv3ACIARVwBLR4LltMdvAc6/FrABpNU72VVAQ13D/Ad2hcXXgF4gLBDp6ilUDQ7+r+YEzMWmZXDjaYaqp4iACK+dPE45lcMWKeiTa1bAJuMjdTEiAiRua9fLeR85LJp3bae8Mp3muSk4LzjpqJ2Xbo/FB/JugQ0QA4SEbYnpcTapVMSIg8KsBIuWbTKjEVtdnRAxkhajdBFxSmyha8/9Wj8D4Ip0nmWq1+uLeNFMFTfaRlPaoh/R9sOPTqPj5cAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}
