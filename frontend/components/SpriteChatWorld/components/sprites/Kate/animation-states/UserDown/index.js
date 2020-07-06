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
      <rect
        x="14"
        y="4"
        width="28"
        height="49"
        fill="url(#patternKateDownStand)"
      />
      <defs>
        <pattern
          id="patternKateDownStand"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#imageKateDownStand"
            transform="scale(0.0357143 0.0204082)"
          />
        </pattern>
        <image
          id="imageKateDownStand"
          width="28"
          height="49"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAxCAYAAADJP8l8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU6SURBVHgBlVhNaFxVFD6TDqZSbGy1mNpIJ6HUiUpNQhHbRakRrFkIsUrtQDdVQVBRV5qNKzciXSg00kKwm9KpUnVQrGZhRrqIIJKJweoYZWZS408wGi2EGNQ+33fenPfOu3Pvm5kPZt5975zzffec+/dmUtQmBjrJ0/ez65SiNpBuxUmL7O8lGhoM2jMl/6sa2VoRT7UiBBFAhAYOxf1mJwPx6Wpz4XQ7YhACObDnaGMMfCRrl2i6VbFmMLN2iXa4CMzMNDGymzsfPZNscYUdMYg3J5hV0OYkRNKGGJc2lYsJa7iq4sxQgljIJ24QswA23TlbllZBKaeI2HDyPf/Ly0eTKJdr6IgtS2eG2nkuHxHjymIUjaOrrDxjWxUEUBopIYLRhthrLz8a+uCeO+NnK+KukicKQgDl1IvaJJJ7iEqW4g/IRqARWyfZ7oy3caXGbYzj42NEb71KNHosyKhw9kLYBl585UKYLdrPHo6X0bbzdGix0ft2U2ZgbywD3UtbjzVMMXA9ePgB5m4QBIbv3Ez3D26LETxxfIS+W1zle7Q1kJ22SYfkCi5waljHEL2SwJ/++o8+Lf1Gb35YIxdgg48Wc6FhL729Z5P/vUqf+IEYkyur81ReCGx7bln2v/vZB5mhM9cp+5FDGfpgssZxa10jdS6yZ1j+tZZ67uSXhA+AIODoSxN8vWvvZm6bJHgGm7QlDhA+cDcIiihm6XjhW77HOlwsnqJ/Nq5R6esls7Ph+MAGH/hKHDjApcUA65mF/W/idLAOT7/QWJprnbuoY/0HLqu24X7fvR9z3D1d9oO46SsGJgPGakfXhpD8s5mZWIYynuXKH/TU6+6tLlEQa1A2bhCViUJhm5AZi7F8Mt+i4N9bMv53jdtXN0XrSIRlCQi0j+BEMUMTuZrni6YSBWXHgSBK88iBA6Ht3UuXyAbtM3d+iq/gOFEkko47BQGU7dz8MNHkFN19bCf9vrjeQKzRs72brzf1dNLsWaJzS8P08O4NVt+0md0zo8HCHvM/Vy4Ti4EoIIzEBWIDxDY2vJWv4BovkKeXhjVDmQy76oS9g1l+Xi2V+V6IRUzs/igTRnfq8lWukg2x0yK782ZuQ+yLpX9p28FTMWchhlCjWADEIBYczOtzOk+LbN9WagXI0CytCyZnrKRYXygnr6v6VA+Iy6ptCn8VZqvt4NhRP54KxSiGM5SlgC1LSvHzNxV64+13WspI2xGDWABc4AS3lDXM8ODQUNiz8sIyb7q33tHniejzjx3hq56VOivxY45gVnoBb8BdKM6zLR0tdOINWdXc00LNIH4QlgkILnBKln5pPc4Qdb5WD5R9ElnqsrYKKSfE9OuFjGVYUvQEwOvC0w9l2Hj9YIr6j/fHCHtvi79OV3+Mv+2unKnSWsljAeESbtYREQ253569MSL+fDoU0B9t0zEuzg4MMMqH3QHQb229+/bHMpo+czFGjjae6ewRIxAucMtE5JKigQHV60VDRH8pX/Q/f1Il/xHfo+S2jjEnBBaWo/v6fpo2Hwgw05CBJkK5KvmV0Ddbynh9uS0xIamAySdI/DGDbGSczAw0xAZfxCTBKYgeYrbpMbOR6WfwRYwrO6Cl/2kkS5MMbZTVXBpJaCo4suaf5lOVcI+14Yb3v+fzL0vdNE4riXzOkuotD2BC42yTLUwftnqjtiExQ/0uimML25We6ixa33ujF+LVJEp7hpKdfqtG2/baoDslfklZOktq/q5rB0mxTkH5oSltHDH4gWLOUjyDzfR3wblebCVxra92fP8Her/xJj8Eaq0AAAAASUVORK5CYII="
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect x="15" y="4" width="27" height="50" fill="url(#patternKateDown1)" />
      <defs>
        <pattern
          id="patternKateDown1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageKateDown1" transform="scale(0.037037 0.02)" />
        </pattern>
        <image
          id="imageKateDown1"
          width="27"
          height="50"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAyCAYAAACtd6CrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVDSURBVHgBrVhdaBxVGP12u5iUYqPRYkoj2VitK0qTSBGbh6IRrBWEWqU22JeoIIioT7Ug+uKLSB8UWmkh2JfSVKkaFKt56Eb6EEEkmwRr1yDZrUbbYDVaCDFou51zJ+fuNzP37m6gBzJzZ797z7nnuz9zJylZAbqbpKKfJ5YkJStApl4FLdDbKXJ/T1geLwSXUjXWiHCqnggEAIp0b4/WmxgJhcdK9UUzjQpBBMTA5j3JNqhDtz7BTCNC9RB36xNMuxrHHWlSuJo6Uf2NLnFHHG3QPj6ZEmKuCiRhGUImnan+iKiGLxtpEX8DIxKQJoQcQEx3zOUuIcYUUsCFg58Gl8pQdcL09yc64XLndKYrTg1VSXE3QlIdN18qzcxsRAxAOpg2NEQZQu+++bStg2fTkcAlhX1p9oqBHCnUCzZOwmcI0h3rA1zkGnYt5Nqyleb5silj3J7bL/LhOyI794ZOho+dtGVg39snrUuUX94VTZ1rR0lTaOfDmyTbvSXSc907V0/j2dB1wfXYrkcNd0QM6Lt3rTzSsy7S+PmBHfLT7IJ5RlkDrnSMneEdXODUSIwZesNGv/1zRU4X/pAPviiLD4ihjhbyIbI33t2+JrguyNdBI4zBLwvTUjwfxjbfdim43mPqwBE6coOK796elc9HyqbdYsuOZS5JOiteLKdeOfi94A9AA2DP64Pmft+WtaYcJ8BviLHMdgD5wB0RoyBm46Hhc+YZ62x29LD817wohR/mEr3keCCGOqjLduAAlxYCEq8B7GeDR8J1duS1ZDquNt0p6aWfTSp1DM9bH/zKtHugxf0SrXkswMBjbDa0rLLE34yPR5xx/Iozf8mL7/m3L68Y1hg3YZAURayoSyTeFmP3wlADYv/enA2uZVO+vKa6TijKaU7oOsSB0awM9pcrgWDKK4bVnuu41YghHU9t22Zjn5w5Iy7oOlMn8uaO3ejAqAg77RQDsPKPT/eJjOSla2+H/Dm7lCDVaF/fZu63tDfJxDGR43N98uSmVc66mbgrTIR9G7tkdjxvhEASklWFCcYAxvb3tYZ8JkNS0dM/E3cV7neTsnqZrLMnZ2KlQtE8k5RCjAejKhjN/NnLZiKBq3j+UqRzae2K+Gx6SdY9dDhSkaQQSQqFQJvv5v43s5TunLt+7o7QPiv6AGfxdPpATsKmEdZdxGImvCQEQtFJ61LHzdoLhMCJmTk8Go6ddcYdAhV//3FG3v/o44ac6DjaoK0VFIm80zLx8dKg4KvP7DZ3PfsopOtpIIU0QHcZBrDB3rURT5N2FlGkHliPouDTjlAOxMIx43hhN0dv4LSoUtkomELw4Q3+0hPZSNyIQeCq+hE9g7vmrnnp3Nprf++8PXrMLf0aPYnOHy3JYqGS2D95rDATBAsRrhjg4FKo9O2YJdd/Ogasz91kyzw8gRsdx2w0zkCuc+xa/WNHTxky3YELxb+tAFxT2JCr9tyyMsuFSv5sqz3OMQ2GIHAAgQvFU4Z8ZuhLE1vdk7LiTC/imjyOyIlY9wTPIHz2rTciKZsZmrdivQOPWyHUgXuMmU8sE7fqAh1q6PFhR2oJAd6vGDRCYy0CVz4yprAW0tIAzOxTs85FXs8V4D1d8WNjQz5cqDlpk9MdZvGbTTVXCMZ4wN0RH2o64xGOe1z8lUERvfBrwemMrvQhlN8BjJsX48VW6/xG9SpZkRgQ/9xJdGj5fVXtULUjPkFvGvntxTLeCjjDkygqFDpHNmrB6QyEh4bj/4A5F5ltPJpjq+NYxk/Hcazo/4WE74XLDVeupxgFE2J11tk13bn0t+K5Y/wAAAAASUVORK5CYII="
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
      <rect x="14" y="4" width="27" height="50" fill="url(#patternKateDown2)" />
      <defs>
        <pattern
          id="patternKateDown2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageKateDown2" transform="scale(0.037037 0.02)" />
        </pattern>
        <image
          id="imageKateDown2"
          width="27"
          height="50"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAyCAYAAACtd6CrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU8SURBVHgBnVhdaBxVFD67Lk2l2PgXbDGSTa26QWmzUortQ9EUrHkQYpXaQF+qgiCifap98UURRBQUWmkh6EvtxlI1KK3mwY30IYJINg22rlF31xqtwWrbQIjBttv57uw3c+bOzO6kH+zOnb3nfN855557Z5KULBG9bVLX95OLkkroKpkkRlpgc7fIg3l3PFFyvqr+XCvhVBIRCAAU6d0WtJscdYXHq81FM0sRggiIgXU7wz6wYbZRgpmkQq1gZxslmI5ztjPSpMhqatj/jVniinn4wN9uppCYbaBJOIaQKWdqMCCqEVWN2MzoYEQc0pBQBDCnA7OzixRjCSkQhf2fOl/1gt8wg4OhIOzsYjPThlMFnxRXIyT+usWV0nRmEjEA5WDZ4IgxhN569SnPBvcmECdLCseVOVYM5Cih3rA2Ce8hyOxoD3CTE4F9kFuVrS+/UDNjrNsz+0Q+eFNkYJebycjhY94Y2Pv6MS9LjF/cHiydfaKktdDAI/dKtndDIHIdnR1pVDW0Lbge2/6o4Q6IAX33r5St+Y6A87O7++WnmXlzj7EGstJzDIZXcIGTiFwzREOnPy5dka9Lf8v7X9QkDpiDjRaKQuhsvK9zhfM9L185TliDs/PTUv7NnVt3x3nnu8fYICMEskzN79iWlc9Ha8Zvob2/wSXhzMp/1VIv7f9e8AHgAOx8ZchcH9iw0oxtAvyGOY7pB5AP3AExCqIbD4z8aO6xz2bGDsr/yxek9MOs2OB6YA42sKUfOMBFISDyIYfzbOiQu88O7QmX42rbWkkv/mJKqedwv+mhL43fxvbwQ7TlawEWHmtzZ/sNHvE3ExOBzLh+5cq/8vy78cdXrBj2GA9hkJRFPNEoEdsXa/dcIYHYf7dkne+aGc+t8PcJRdnmhLYh3h7LytBgre4IpmLFeJJADOV4cssWb+6TkyclCtpmarjo8nTd7giKMOhIMQClOjLdJzJalPW7uuSfmcUQqUbn6lXmeltnm0weFjky2ydP5Nuc/Xc+YJexs0JEaIR9zufsaTFCIHHJfGGCcwDn9vZvNN0KLgd1tn8oM5xnXPi1DbLufM7MVUtlc09SCnHeWVXBav786ymPS2eXtrMCIPTd7GXpePhgIBCSQiQs5AI+n0372YMz8tTPrblVkgCZ2eW0gYBtzgyzQgeiMbx902hnl7SsxrboKS/LqADASXiZcaNyg/55piLvfXw0USZ6Hj7wJY8+zjL+vnIn7BOBgi8/vcNcdfdRSNtFgV2Z0VkFMmx0EUVagXYURSfec/d6uQqxNXOGL9T6eOry1UCXMingw70qzl7DE4LrlqHAC49nPQeefTfmU9KzuydA1n1X8DW3+rv/llP9dlzkTLiruW5p7G6kWDw956VPrM7dHCRqkOuPnuvetNlcseZ8Z8FJQm6TGQRHxqQ+MiYhIBOSjn94wgRAUoicK18MBMWA9ZOBDeetmX58A+hSEFHQhUteKRw3dyizzsi1O26EWCFkhcqBv+WTGlmBhILnyie8OZ0l5j967Q03cJCrMzH2INYGuVK2Xs2NB5oCApXShYCt3TR2lYimf8W4mVyMDaZS8EVRgYVSPVYIaFpGZtdMnJ2YBIn+6VI8esBbG0bPR9LWBacRihUzd5Nz7KGr47JLJKZbXYOb1z9s55vyNBXzHj2M/FKHLOsyR48prX6XpOhAk+zSzYQ0IT4Yt3rA6kM9sRiAKO3IeagicrzP46Dl32iAHtto3o3quYYxsgr85gjueWc49E+aJTdIw6EeJ27ZJUJLQ67d9QpoXAOgNeZoIwMufAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
