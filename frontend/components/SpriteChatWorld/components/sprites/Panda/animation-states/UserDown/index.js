import React, { useState } from "react";

import useInterval from "../../../../../utils/useInterval";

export const UserDownStand = () => {
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
      <rect width="56" height="56" fill="url(#patternPandaDownStand)" />
      <defs>
        <pattern
          id="patternPandaDownStand"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaDownStand" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaDownStand"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADnElEQVRoQ+2Zz2tUMRDHs9eCVChoL0rdghShl6J4LSgqnnvwX3CPpX+G9Fj/BQ89i4pCr6L0UpAiuIq9qFBoEfb6ZOJOmEzzksmPbl7Le6f2JZPMJ995k0l2oC75M7jkfKoHvOgKZyu4srjU8EU4/PUjadySY6FPSY6gscshbOOQvG+onS5a6oLBGOcGyFXd3nlhvdocbYmjv5OAHGj13n0L6ODTRzFwpwAp2M3bd9T8/BUNsrBw1QI6Pj7R/5+e/lU/v34xbS5lOwcIYPAMhzdEYTgeH+l+ANopQHCKJg9QD+CkYJweQDlkjnrZSYYD7r5/reHWhquW7/vjA6eSrn4AufHwqelfH/D6tUYN5hSqp51rJmr/+zftJED4ALFt7daygnFgkYyKzUQd/v6TlemzjFcATsfBf8dQPQokBaSLYVRsJnr4HMhswN0PeyacOCCGYChEjYpTtTHpwMAbD9brAIJ62y93ziQV/l2BkyFA+oHSvibpPB8lQyYriIDrTx5bCUSaYNAo1H/vzVu12VXANuV4SqWQ3KZzgK8e3TX+P3v32fwNjtKHKt9mA/2rA4ITPEy5QugkfQ/fr8QObKqFKEwOjoYg9R7neHCvdLWh4gCXs1UkJxmYFPdBiRoc0gdHQzMHTm/RzqUVvqSAYBKqQxHSB4dbA4ZmVUCqIlYz8C6n2AZ7LPdy4bIUNGUaVZuUbMIgsLrxEo02ppZrSSHqhENvBnOW06G98EzlM60/XQuUAhkN6IXjXjHYVlU9UNwmFjIfECAiHIwKXcfYswf0eIx7JO5lvGuovUSY5isYAJRUK20L0FlASXVDnedViy+Mq4eopKppA3DVrDNPMtbmTmZH1eBVKCx9gNjmCttY9ZI3er1VTC+a0KFUKBEsXPMnXkBFJxl0CO5D4SatNBgH1mE72lKp14c9YFsI6Rttcv/py3wp50EcD+9LZ64gJpvQuc5ylKxCjF1KcjGlcVTpxDpDspE6CqaS8yD3B2yqAsLFb+r5L7S4+vhU6+LX7IeZZ8A2SHo2rKaghlxcavB3iZAiMe0ImJpcinyDqOJ5hGmJ8EyuZKgSeADmP8LEqIV9+Y8u8D4nPIsCUiAKGwMKCYU/nQQ0Tha4sug2oPnS7YsoswCCq44LAdjmpOQCqwcMfOTJpwlXJnXNFVLAp2LIVpLAekDJKrWpIFUg197nYxEFTV3KZsoBlNqGBCgGGJqoVnsPWGvlS837D9YtP1eiLH5FAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export const UserDown = () => {
  const [state, setState] = useState(0);

  useInterval(() => {
    setState((state + 1) % 2);
  }, 300);

  switch (state) {
    case 0:
      return <UserDown1 />;
    case 1:
    default:
      return <UserDown2 />;
  }
};

function UserDown1() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsxlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect width="56" height="56" fill="url(#patternPandaDown1)" />
      <defs>
        <pattern
          id="patternPandaDown1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaDown1" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaDown1"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADqElEQVRoQ+2Zv2tUQRDH99qARAhoGiVeQIKQJii2AUXFOoX/gleG/BmSMv4LFqlFRSGtKGkCEgRPMY0KgQTh2iez3iyzk/0xb3fv9uW4VyXv7eybz37nzc7O9dSMX70Z51NzwMuucLaCa8srDV+E418/kuYtORf6lOQIGrscwmccko+NPaeLlrpgMMfEALmqu3svrFvbgx1x9HcSkAOt37tvAR19+igG7hQgBbt5+45aXLyiQZaWrlpAp6dn+v/z87/q59cv5plL2c4BAhhc/f4NURgOhyd6HIB2ChCcoskD1AM4KRinB1AOmaNedpLhgPvvX2u4jf665fvh8MippGscQG49fGrG1we8fq1RvQWF6mnnmpE6/P5NOwkQIUB8tnFrVcE8sEhGxWakjn//ycr0WcZrAKfj4L9jqB4FkgLSxTAqNiM9fQ5kNuD+hwMTThwQQzAWokbFsdqYdGDirQebdQBBvd2XexeSCv+uwMkYIP1A6ViTdJ4PkiGTFUTAzSePrQQiTTBoFBt/8Oat2u4qoE85nlIpJLfpHOCrR3eN/8/efTZ/g6P0osr7bGB8dUBwgocpVwidpPfh+5XYgU21EIWXg6MxSL3HOS7cK13PUHGAy9kqkpMMvBT3QYkaHDIER0MzB05v0c6lFd6kgGASq0MRMgSHWwOGZlVAqiJWM3Avp9gGeyz3cuGyFDRlGlWblGzCILCG8RKNPkwt15JC1AmH3vQWLKdje+GFymdcf7oWKAWyNWAQjnvFYL2qBqC4TVvIfECAaOFgq9B1zD19wIDHuEfiXsaHxp6XCNN8BSOAkmrFtwCdBZRUN9R5XrWEwrh6iEqqGh+Aq2adepKxNnfydlQNbsXCMgSIz1xh21a95I1ebxXjRhM6lAolgoU2f2IDqnWSQYegHwqdtNJgHFiH7WBHpbYP54C+ENIdbdL/DGW+lPMgzof90qkriMkmdq6zHCWr0MYuJbmY0rhV6cQGQ7KROgqmkvMg9wdsqgJC4zf1/BdbXH18qtX4NfthgTOgDxQPvtUU1JDLKw3+LhFThD/HFj2oxC+IDABMTS5FvkFUMSVMQ3AUNke95EqGOoAHYP4jTExN/L5i4zoDSB2lsCEAV2jy8Z0ENE4WaFl0G9B86XYjyiyAoNVxKQB9TkoaWHPASJZKPk24MqnrXTEFQirGbGMZuMg2YSoaz9skTrogJXbVAUs5KQHxjSkSoj4VZwowZ5UnaVtMwUk6mTP3zAP+A/6tOlfb59OTAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

function UserDown2() {
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
      <rect width="56" height="56" fill="url(#patternPandaDown2)" />
      <defs>
        <pattern
          id="patternPandaDown2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaDown2" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaDown2"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADn0lEQVRoQ+2ZzWoUQRDHe68BiRDQXJS4AQlCLkHxGlBUPOfgK7jHkMeQHOMreMhZVBRyFSWXgATBVcxFhUCCsNeRareamkp/1FRPdnqXnVMy/TH16391VXVvz8z405txPjMHnHaFsxVcW16p+CIc//qhmrfNudAmlSE42GcQtnFI3jfVThdNu2Awx6UBclV3917UXm0PdsTeXyQgB1q/d78GdPTpoxi4KEAKdvP2HbO4eMWCLC1drQGdnp7Z/8/P/5qfX7+4Np+yxQECGDz9/g2RGw6HJ7YfgBYFCEbR4AHqAZwUjNMDKIfMUS87yHDA/fevLdxGf71m++HwyKukrx9Abj186vp3D3j9WmV6CwbVs8ZVI3P4/Zs1EiBigNi2cWvVwDywSE7FamSOf//JivRZg9cAzvrBf8NQPQokBaSL4VSsRnb6HMhswP0PB86dOCC6YMpFnYpjtTHowMRbDza7AQT1dl/uXQgqfF+BkSlAukFpXxd0ng/UkGoFEXDzyeNaAJEGGByU6n/w5q3ZLhUwpBwPqRSSjykO8NWju87+Z+8+u7/BUPpQ5UNjoH/ngGAEd1OuEBpJ38P+lYyDMZ25KHwcDE1B2hzneTBX+tpQcYDLSRXqIAMfxTwoUYNDxuCoa+bA2RTtXVrhSwoIQ1J1KELG4DA1oGt2CkhVxGoG3uUU2zAey71cuCwFXZlG1SYlm9AJat14iUYbteWaykW9cGhNb6FmdCoXXqh8xvWnb4E0kI0Bo3DcKgYbVDUCxcc0hcwHBIgGBjZyXc/ckweMWIw5EnMZ75pqb8NN8xVMAEqqldACFAsoqW6o8bxqiblx5y4qqWpCAL6adeJBppbcyddRNXiVcssYILb53LapeupEb1PF+KIJDdJCiWDhml95AdU4yKBBcB8KN2ltg3Fg67aDHaO9PpwDhlzI3miT+89Y5NOcB3E+vC+duIIYbFLnupqhZBWajNMEF1caNyqdWGcINlJDYajkPMjtgTGdAsLFr/b8l1pce3zq6uLX5cPxGTBkrBaeng07U9BCLq9U8LsErDR/8FpfA4mA2uDSyh4MVTUUVAvZhnuqKxkKIDkAS/cp/9EFvpPjnhMFTAUUaPe5edmALVxZlA3odnr9IsqpKbjqmArAkJGS/TsHTGxu9WlCGklTCsRUTI2VBK5WAEP5UGLg1ABKVjPUJwQpWaDUd1tTMPWhWLsPsA24VhJ9Dtgkxhah4GWCzjzgP7KAOlc9IxhfAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}
