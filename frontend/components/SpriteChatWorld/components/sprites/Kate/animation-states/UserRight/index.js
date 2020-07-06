import React, { useState } from "react";

import useInterval from "../../../../../utils/useInterval";

export const UserRightStand = () => {
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
        x="18"
        y="4"
        width="20"
        height="48"
        fill="url(#patternKateStandRight)"
      />
      <defs>
        <pattern
          id="patternKateStandRight"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageKateStandRight"
            transform="scale(0.05 0.0208333)"
          />
        </pattern>
        <image
          id="imageKateStandRight"
          width="20"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAwCAYAAAARtFotAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARjSURBVHgBlZdbaFRHGMe/3S5NSsC2tqWttZhYare1GBPyUkuhjdDLg5BKqQoqBAVBRR8EfRJRX8Q3xduDqPjiBYkBL6i4m7cIIq6IlzVIdsV4Q000IDF4Wc9/Tv6z38w5Z4N/2Mw5c2Z+8/++mTlzkpIamlknlVlN1fveksiVUUnV6pNKAqHUMA2FXn7aKMWH5dS4QO2qtSUsLxei90ngVC3YzL+CEM+G5Yz5IlcPV9uiXoOZisz7wFBCuEa9o5JUALVAP18aBpkytUCkcsjWUUwJlKY7VjBPTpgByJQBzECl6njxgQWmDwyBkxaJHw0OrTOAJJpDO4gy4gCZYEBtjsYc2UECAEBos3SZyMHOsC2NpDXMXy50hHLflrATrgFG+63r/5MdXdVoIg61bKPAEQFmpwTXgAAGodTLxwL1LKODPzI60hFhOrolnf9EHSJUjgQxREA02BfqfpjcYHaNA2Ri0eDvuX/aEDXk1sALp/SVmMP26RNMydkGIH99WHKFx7LrRFnuPX8jEjOAAWLL6FCT9OGLPpnx5RMp3nki3T19pg6hAoaBLNAXnECYKE4MOs5ft9f8oJ/bJjh9MAjeOhaoXZ7pOmfCohjOQM8eU76qH5HCtUf2+fffNUt2yufmOiPjCBPVsbDB3gO6e+lvzmD3nl+295GQuR4RAh2v3XxMkoTJQT7LVy65Dvk+BATrCSGUh8p2GyKv33z8gcll1VkIqw/aUU7IhE36aaoMq5ABPdk/KMXgnrOZJAcI2IqOH+V436i5n/hru8j9vLme3fKFDdFXOc4hw8SMSd9FWT3vf1O/YVUILE4KB/l3Wp2FXnz0WqTBXT72kMp+1Vjp+GOa3SFb8oMG+tnkOlk5t1M2bg+XzLYjRx3ApjWLTIk2MOWEjKRzzcEJOtMpwE0tWdkUlE8HRp06CrlP0x0XJvOkk7+ja7/tiLJtTrOBAVwqFE39qdIFU9p1mJ060QKKwYwOe7nxBZh2SHBah0t3WNS+2CHuGj+mIcPJgDDDuWPnbWPmj24IYmeWEPKdz+fDgx7uAEuP3o4448Tozv5zCDDjEH+wnd6ONcAC1iEDppcKl1LS8xRC3r6yzVboPYplwLAhDaLgXLs0DrHxf29tNSH7e9VfyEm6f6NfbMhYJu3Tw/wtn9NoX671zUPS9Mssafo2fOWU7hYcSOlCryn7Dw3ZujRe28gZX/uEQhpG9e4/ba8fFJ+Jr9BhAO3ukUrws/qoJfq1TEe5VafM86+zn9hn/IrN+BUQJioCC8KFo5FCxYH5LhPPZXbQeQOMz5AO1mkziUAdIqDMHdwRFpfDCBDh6k6AAqbd1VKsQ3YClHljWBwoSRnfHd6Ls0eC8yMfLtRcwZ2f7Fg9tmt2SlZyg2YjmEYYNHLQ6/citiAGwDrlzKOOrzoeqTzAdnbHfLTrxjhfsMhxElL8SOJRgXb8QSk/ZL4beVhR2EmE1VJkO2io/6Wws/tm7D+MNYGExtWPB4PeARG1dPZ2uTsxAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export const UserRight = () => {
  const [state, setState] = useState(0);

  useInterval(() => {
    setState((state + 1) % 2);
  }, 300);

  switch (state) {
    case 0:
      return <UserRight1 />;
    case 1:
    default:
      return <UserRight2 />;
  }
};

function UserRight1() {
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
        x="19"
        y="4"
        width="21"
        height="47"
        fill="url(#patternKateRight1)"
      />
      <defs>
        <pattern
          id="patternKateRight1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageKateRight1"
            transform="scale(0.047619 0.0212766)"
          />
        </pattern>
        <image
          id="imageKateRight1"
          width="21"
          height="47"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAvCAYAAAAM9oFdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASWSURBVHgBlVZdaFxFFD67WZpoJLXRkNoETVJsbn9Is1KqxqemoManWKQ2oEJQUKjoQ6E+CVYRii8ipNIHUfGlWkqNaMWK3fhiilJyVUxdg+xdMTZWY9KG1jS0YXu/c3Nmz507u91+cHfmzpz55jvnzJm7KaqA3noq9XWW38cDoh+XKEU1IOUiQ6sJNTFwZU0H5f8upmoi1eruy0bthJ98vxF5qhJh7yOhuyejtmcP0c8flxdhXJPbYcnUSogWQB/jMQRU0sRMasdPEwLcpoaISkfMmEDCo5GWxIhKVq5dDsm4DQmZmMrKn/lwiNdAlOZJu3aFUqMQZJSMqdlIiUmQStBBbGK2osxsFJKADDbPPU/00XBka4cgLYT2URJlaN8/GC1EH+Swf+vVJ2jkeNkrp1INYxgqExKuqLAPIhACaPXRipHq7GORrQCLRZkQkgrbs8MDSVJxW+8o7oJIk9vAWHd7I1dXglSCDaNHdz1s3NVEv01fdrY2nDHt39zErZwCLM5NLtAp/1969/Mi/XVxmcehEHM2eRrlZQfahVWXp6indZbyf8zS6NhUbA6bVVUKRQCSJ8mCoj2vvMcPsGVbk7G/d/1WbvVtxaRa7VfHv2YXBeLa9Nhhbq82LJL/y3kz9+3EhK0rfvVJv6N3G627eIb7g08lM64B4kOjvyaVCuS8Im6ifP8bxyoSIlQgbJgvxsZj9ymIcN68e+6kYmgoJYvFbavrOLaiDicACbMJDSkAwuaH+rm/sDKGswviLwpzlKd4luFNJRhSqYiXn9wdDYTtybdfiDZpbKLHN9Sb8yljwNx3xQRpWgjh8v6B7fTOJ0d54o72elYPtdjo06kl+uH8NfO8vu9pflzgjHlrO0qDOzaYSjqYm2MiEL+4a5hOBKcp8PP03/SS2bAz63Ef47BJfKMAJKJSLQMg6cySIs+vjHlu921sb81wGLAYKjUwZiuVBCdIJbM4NlAtbmKRwO7rkGiYOCCuewc3mrOIUkWGdTJcBPAol8sl/0xotbgg0ku/085sC1eLi0jIAJsQqJPO7KULB2h51WvrW5epuWUTtTReovrG22jkg8/o7D/n6IEtmzkctzZl+Om526PvJycpCIIDNmnGHohi+xOHAUesbfXG6HpbKIbj3VQLYtnHTYPy0+UoMT587Bv63z9BtcD5H9MuBo2XRs7Quk1d5t0V07SL8JZsim8g+QoIUBwo54at8/ycO1tg+xuSAnd5t1PX0JoYMQgRlrZ999NM/gKPYXMXUi6VIBUUjszHFuh5kC/6pcS/6YxLZf/uveZ9Jv8mt1islXU+2Bf+jlPBn7cpyu6LShgHf/r85I4eMoRQg1YjIk4iprRv+DFug9PjJm7aPbSeHybGo6rIiEokpuxyFCshshdhfib/JffhHW+0AthnQIhjsnOxJTx0BZ44VYUQkEQNLK6NPjE7ynOjY1TimHpdzWYQRtikErARTgQIgaiU68xj3JcXlGR3e/Re7Wspm+t1gJzptBjoLyWMcLe6qsUoDj/bgPwjxP2LYoEnsQ+fqJadUeeV4uraUGxT1Yy04c3gOpzciDL1afilAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

function UserRight2() {
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
        x="15"
        y="4"
        width="25"
        height="48"
        fill="url(#patternKateRight2)"
      />
      <defs>
        <pattern
          id="patternKateRight2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageKateRight2" transform="scale(0.04 0.0208333)" />
        </pattern>
        <image
          id="imageKateRight2"
          width="25"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAwCAYAAADkStGdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgBnVdriIxtGL5nbLu0ffN97PfF931kx3EcwkjKyg+rHJMlLVuojaKIpPjlDyn5I3L6IaTkkFDOyuwv64+MhMbSzqhdhzBYbWsT472ed+5n7veZ97Sump7nvd/nua/7+LzPRCgkplRRoS5eem7NEj3qpUiYvYGLoByjJJBEwLeBtZR5m4v8Fom0fmrSHh+my5+DyCJhCabMs8Jz2x4nrSR6fK60FnJJZoax4ncJMAKYQ+5AlgqSyJXEjL8kANQYaSIqnNUyBodTIkouXvCc4+4IkaVcjRaBIqKSZ2tONak9MFLqiZIP2Cp4oj2AcirPiSYWxgWScBJBpGNetFwTW0qhHGvWrSc63WyvNUMW9SIwS5ctx3hir60Ic5Bh/b6dy+nQpZLXgSQm9EbLclaqOt6aQzEIAIyylH1JZHVBiWkhlLHlTCCjsLZ5QTAJgDBJizg8UCzJTEA2dmi16v5AEk4eNs1fNleHRyp+3tHtGL0QKif1E2Jq5CqD0tTTLrqbfk9Hruao88sPLZejJwmOAzNxbqjsbqNJgz9Q5tUHutLSpmQIEwhA7ktiAhYDKAZOPpSt3HFc/YCJ02KOPSCWp7ErifTm1qU7KiQMDkVHyzE1fu/fQ+kn7/T70SMnU2L43w59rgekF1AMDauq9TOIjq6b5TCg88vDsn2+4eJ+gfvs2fbdFz3XowCQn9yjBw657/cEilHvcD/3KaePGOTp/z/7qdyUPLAJ+lvrTHiGCwSDZtareVdRhnCB6Fp7njLWs6wieOsFTxIcDZfbemnLikZbYI2392+wSatjNH2wcytkQP5eLpgkMaS2UGuFB1WyfaTV4ecvKKKaoVU6L1u2NtIBSy6xa9tqNW66lyojibiRNMweo7sc2JvKa6JNy5rpevY+ZdMZ+tjRq95DHk8m1BxyrPH8xoMASUZSg84jKI0nSZBlirJE2VrfEkbFmEcEvJAAgekJF4wnSWLEID3PWFXECWVAiddchlBCh0uGCvWPXkBZ/jc+piuMrWblrFAqRkG8ftbuTsJecIPBC4kDxSpzs5TfAyAwr6oV7MXGhnGagL2QAIEsW642833xcFR3LiarMAmkF8VFBfaCwyaVuwEtAFxpoQJ0qMRLAjeYyhEyM2x4h4ZEocBI/EAGJyo4PGi+n1Wj1IY5yW5HuMzu9kOsu6uo4x8tUyRgBUm096WdDyPpSOacg4scsj8uv1CVCNwc8JbeZD5TT7pAMSsnTMDf/ihiBqv5MyuPE4ns/VY1xocl1e/r0tF04lVGE5gAARurSw2xk4tkGfK7EU0Dqb5xo16TunCY2s9+ogHJiPICe9z0hPpjyRuhrK55ofKEcWbXHk3gtT/UvYsJoKz15A2H/N/EX4F7Q5NIZQgTfkB8Rl3g3kAShApeAOwNJ5qJIDdz0ScSgL3gEUQSyJMffEn4K7mgZ4gKiyxVs2z9vAm83HHDJVLt1JmvIRpu30yUN+IjCC8r82qt43AMRYKmkg3KXSyPnSVt1jW1xrp1LMZTrZJtPmQfjpgH5gQXNj4NcJBKwsrWfjaBAfN+0KdmdIO82fDfBvNWH4qkrwaY3f8LSfmc+xlanZcAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}
