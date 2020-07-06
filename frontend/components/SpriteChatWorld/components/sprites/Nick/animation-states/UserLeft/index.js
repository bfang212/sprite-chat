import React, { useState } from "react";

import useInterval from "../../../../../utils/useInterval";

const SCALE_FACTOR = "100";
export const UserLeftStand = () => {
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
        width="21"
        height="48"
        transform="matrix(-1 0 0 1 39 4)"
        fill="url(#patternNickLeftStand)"
      />
      <defs>
        <pattern
          id="patternNickLeftStand"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageNickLeftStand"
            transform="scale(0.047619 0.0208333)"
          />
        </pattern>
        <image
          id="imageNickLeftStand"
          width="21"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAwCAYAAAD+djETAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS8SURBVHgBjZZ7aFxFFMbP3aQpfdAmVpPdKDRJt7ixbspq1YqyGFzxkaIFoeKjVRsNIsaC1eofUVSqSNQ/WgWrUKstQQwKRtK0UpfAWlAwtDQxEjGNKdrsJrYxljaiaNb9zuZMZuY+0g9m78ydmd98c+7M7DgUoCuWleUfvec+Vd7X9alR/9u5fxyvfo4fDE8Brqm54GozOLpEDWLDHT93Ago3rOVnrv+EyovwDnp2V7cBdvyANiC+7lIa6DujnjZcBztBQABEArTLMoAODnlNWXemlxdVbfF0jqTPLESWUIlRdSeA4fnX+H4Ftp1Db23bwAZdUPuDoCNgAtJll6VfSJaPvWzEhT5lDIgBAEt/OUwPNb9GRz5MG3GFSnUQ1p7ApeH1TaQgREsoXMij876ubjqVaaOVyZ2FaUtfmospPpIORCcZFc4kj8UuXxlACE99Iyio7RZCR4FBL29fzQAdKALw2K67uc6A6jGVSgyAqUtZnNnCuxWJBlq6qLy4TvGDkcShqOf5BzxBM1V1nILk+lAYQCDh6n6i8wOFXAOdPd5PubGl1Heog+s2NMfZnQj1ohAFSO8EnZn8nWpuiFL7z39Q8oWMAUR5aHzCUVAJgXJ8cEQ11gdY/+LrnKD2plryk3IqYAS779C39PFTHYYTaOFoFz/bbqqgc1NTqr7ijo3U+WQDxcI1vJFc52msqpIrOp++qxDT864Q+AkfL55oo6HcqFNiADGSs4CQaieztCy8ikou/EqLI1W+MISqsbWD3nv/GwYaTgGsvqqOXt2+mcuPNb9CO6ILad2dN3o6Rki69w7wR4PkIymoANPptOo0lv2Obr3mfgb7qX34b5UXl5Bap+JQV/rYJwzWFbpkMT9nJqep9YlH1Pt39nyUF3CpuKxNxAyXOhj65fgQtTz3JiUSCSovL6fe3l5ae93KudH2zGXZ6b3JpAtmC4Me+Xov3ZZqpkgkwnk/8Trd2HK78RKuJNkCMJvN0pbNbcFQG3ji+1Oc9JDoamxsdPUJhAL2eSZjxqug6sh6ThejkN0RwLEfR5QDcYF4p1IpCofDNFXYorFYTIXgpbcPuKFesZMQSP0XH3xFXkKdmDCg0rk+UqsaFNad0dAOhz441Nl6izo3GIopY5EPHt7KlUiUn3aB9x/YSblcjvNTs6cUtym0dTmFOwChNU11nDJvJLkxzgAvMNLpwZNUFqu2zVMpthZs47Sp35qi0Hhx+jgsRDaYO142TfGWbfRT5iCVVhKfwarOsD0+4uocb3mcglRy+XKaOUt8Whl/Jyhs2t2j/kagh9990AUYPnmUnSEhD0VX3UzCcDmdBedp9xykrD5K0Ui4CMzm6L/TfxZcDdOChmspSMb0Ab46XpkPrYjSlckmV2MAUac7FMe6Av+ixSWEKav3s0AI7n8YmHDmhSL4OvDw0c/YpdSJ4FLezwvlDtmcesKNl/zeu/6iEVOvhphiUJ1eNj4UNsEzyyv4niTSrzf/TlBxp1HxxiL3q00TPTyYsU514S9ZhA64VMiAdluA8feNgZCMA0UXGkkHnAEo71hdoer17SvtJIkce/riDEBb2HHYeUFCCDzvUgLWbyZySdOvjH7yrPSKn+6E5tH/sx6yx/HR4qwAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export const UserLeft = () => {
  const [state, setState] = useState(0);

  useInterval(() => {
    setState((state + 1) % 2);
  }, 300);

  switch (state) {
    case 0:
      return <UserLeft1 />;
    case 1:
    default:
      return <UserLeft2 />;
  }
};

function UserLeft1() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect
        width="25"
        height="47"
        transform="matrix(-1 0 0 1 41 4)"
        fill="url(#patternNickLeft1)"
      />
      <defs>
        <pattern
          id="patternNickLeft1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageNickLeft1" transform="scale(0.04 0.0212766)" />
        </pattern>
        <image
          id="imageNickLeft1"
          width="25"
          height="47"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAvCAYAAAAWymHTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUlSURBVHgBlVZ9TJVVHP5dRJzIlJsE9wKbfFw3CC/uFpWtxkbUKnAFtpW1dBTFWovcsqg/qGnrY6Nys7aynGk1rFhtUQg2vWO72ccfqBOk0USihVxQBEREKuN2nwO/w3nP+8Hl2d57vp/n93HOucdFCyBzZULk8Qcelu39zV8Zxgcm/nEtxOFyIkfJAgVZV0xzuvtXSFEnMZedAMiZ2FO4XpRDnadknYE+4IXdLbZCLicBndBflEJdHSOy1MXshFwLCYCQwQJ6mwXthOKsBHTL1fbytK2WnuHTPTeJqMBkWKVaCnKUV4c/k0K6Z8A72zbKTeMooicYRCBnYhV628obIcLK+jZlK9UQwQAIgjz4XS89Vv0GHfkkaMiLjni9A3ufxXjhLeUkSYlWkCdaB9n+5hb6M1RPa4pfj4aJ15K1JwCSrgqAhK2C5VzH4eNdBAEApXowbUV0bwAQqe7v2L5WEKoCDAic2H2/GHMUUXPCkyGIUKmLdQHuWx0opKTlydbnBJ2whD1gtL70qCXxTFqO+GKFZeIhyKSe9E6iya5orZAunuykocEk6mhrFGMbq/3CegbGrWCZExUqCTAyeoGybvVRw5kxKn45ZBBAu2f4vMtWhEMmPTrUJxerghteeVN8QEN5NsUCgycshOR1tP1Cnz7baLAUWNbfLMr62900MT4ux933VlDTM4WU58mK6CKW939eWqqY2PRcWTQnk6aQ2QGbwR+op56hfgPvEpMALHEtJXzZo2Fa6cmlJVf+okRvmi05QltS20gffvSjScDkCQTSb8ih17ZvEe0nq3dSnW8ZFd13m6VHCGHLvi6xCawSbhJhgWAwKAd/aj0ghezQ0Pu3rFt5ARjOCXvAyA7kUfDEF1R64yOG/rjrEkU5MzpFtU9Xifr7ew6QHeJVL0DKGAz/KusQ+uNkj6jXvPg2BQIBSk5Opvb2dlp/85rZSXvIWQR4sLjYRK57BRw5uo/uvquavF6vqMcCeU4qau4xDMBytl4HBMLhMG3dUk+LEtHx6rufG8Kno6SkxGBQTCLffvyDaVBfnO7dIL7FQhzGlKTkHQNTE7RpU+m8+sg1+uDL7ymQnUHjQyPk9qbQ5ckBqqysIo/HQ9PT05SZmUl79zZR+8+n6PKFMRqZHN9pJSISP7e/I/AGuYG1FTVE34RC4pyoyCjINZEM/tZHTjDkBKRiUXSHQYh3HEWm5j8b2B1E6YnuDe99HLDQW0Wijj8r4KH3WkWJkI0rt7AT4nVrosSRWqoSYeo+/ITox+3qjpZxw31U1+amhtNdcs257rMLipi28JyQqPMfF80JALgsmRxfQl46xV8/RTF7IoHYuxJFaJqojArK54dwGwP+mqdE2Xv2WPTXR+v8FDndZX0TWx7G+NTo07Q0nxLyfUJI/SvG1T5PPoslGavICSbldf7USH7lNvJ5PaJ9+NjXdPXoccMciIPYl3uHFPzv3CWaudhLVt4s+FoBEUjhHT78OYEMpLEiTvdiaeFN0gsGSAG2EiX61JDFJAIBtpzRGx6SRHoY0P638zj9Hjok2pwX5lEx+6cVfZ08v8pNuy6NiU7kAXCKswqed3BzmXhKNaSRFEJ4XRCoW+uWj4U7d81eLXGrfTEJsOUQYPCjg1+VwhP1NXJw8/z14fQCYVw7TwQjVbAAb3fT7ioozxGCWAgv+aHnBL4F2Av9qSQsBRFeixDQgYPo5BWvZYicnJnNLa9x6ZPVRxy/f+1e6+pata3PdTlNtlu0WPwPxp7UXqUsZusAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

function UserLeft2() {
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
        width="24"
        height="48"
        transform="matrix(-1 0 0 1 42 4)"
        fill="url(#patternNickLeft2)"
      />
      <defs>
        <pattern
          id="patternNickLeft2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageNickLeft2"
            transform="scale(0.0416667 0.0208333)"
          />
        </pattern>
        <image
          id="imageNickLeft2"
          width="24"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATfSURBVHgBlVdtbFRFFL27biQFoq017W41oeASF+uWrFbFSDY2rBEt8SMajUaIUiXGiCSiqEk1alBJ1R+oMfypIIQYGv1RbQuGrk02GE2sEFoxNa5YEu1uKWAlCJGPLu/c9k7nzc57u5zk7cybmXfOnXvnzswGqExce8Xlhafuf1S9b+3a5er/6+TZgO07a6NJjFLIG+r/KxpzaGSOEjSFAuVYLaThxsVc5gcPqroAbcBLm7tdIoFyyE2yeNPVNDRwTJWmkC4SKJccZAIhN99FTBcJ+pGbFuvvFbWrrDPCo8+4SEAHBsIa3UIQozwztl2JmDMCPli3go31FTCDCRIQC6kO812+cwnIkjSXolinuwXiEANx+ussPdH6Du39LO2KAxAiD2Bti5B8dGsLKUKiORR26iDa2tVNRzJtNC+50XGNfEvFMwAQYJ0cBGINLJY6EktWC8gBlHrSWQXMWQAgEWLgzfULmUwnF4B8/+b7uM9TQI+BDIQY3CPvYrEJtFUnGmluRWVxHqABFojlgt5XHreSTtYu4McPvkGGmBCG6waJTg05tUY6fmCQ8qNzaWD3Tu5b0RpnqwXoF/jGQIdOABw7MU71t0Wp/fd/KPlqxkWO9+GxowGrgLhJzaTnsPpQF1vy+rv8AO0t88kL1hmICAI1sPsH+vz5nS4LgVkjXVy23VFFJycmVH/V8geo87lGioXrOWl9z4NYbQ0P6nzhXicGp4rc5AUEPp5oo+H8SMAqIOqCDdFZ1HTP7SVF4M5HPup1zJ7N5NYZgLzuhgX09vqVqu3p1rd8ReC27o4hDrgEVxCwkafTadX2fe82l4gX2rP/q7pYDxTlgW45MD8R4zK9/wtadtNjrr7gVbO5nDxxmtY++yTXP96yzTUmZFovhMBo7kfXYIj8eWCY62tefp8SiQRVVlZSf38/Lb5l3tSgLWQXAB5KJq3Ethnt7eugu1KtFIlEuO6FoG69smIasFYstgHkuVyOVq1s8xcwrRPyNz7c4Wqzobm52bdfCYh7hByrxkRdZAk/lwIVA909B3864hIDMBPERkRSqRSFw2GacLaJWCzGbioUCt4C4goQYqlNr+UCxCCO9inhb4tiJRj91dkYC6d5i/HcTXXrga8yM1sxiPH4xWXDwiouZR8LScVMIpdVBjCbvr4+l5sYjvXOPqtE2p0WnkHn2jvp0J7V/GTea5oeOJ3yTt0WcMRj+46NlM/n+Rm/cMbVj32LZ4CfhpaZcxUbWWYT4VRiP4ZqHD9W11lFBPE1z9B4pocw1gQLYJtdtDpFwbHDVoLJ41mqWHYz16PXLeUy+8c+Li/8/S/95pBjjA0qyDo5tl4TINKxfOnDLHbZNVeSDTgJmRduwCFhO3uBX4Zm9vdzgz+z5dFIeGo2TikzkrE4E+QBt/pYVpNAPzhujNcUgtVRrsMVix5cp0SAPfu+ZHHdGEHJP4E2AdSvT7a4RHp2dXCfKVLyXqST8wdOHUQS5FIo++JlAkHP5vLq3SvYIT8SWI9SX4K6q4BvPn1N9Z0/WsxR8l6EtJesBPhaItY5ifXdi0lOTrmv6v2uVVQOOdY2lp8AFzJ9F9DRcPcnLOAbA51cAFHZzHBHskFyCvAVkGz0gu2WJ7c7yaOy7qZeyGxKKhF1bSR3kpaVaOUaYF4bgYvOw7EK7i/91QAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
