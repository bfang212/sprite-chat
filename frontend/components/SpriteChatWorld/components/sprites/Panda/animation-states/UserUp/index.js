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
      <rect width="56" height="56" fill="url(#patternPandaStandUp)" />
      <defs>
        <pattern
          id="patternPandaStandUp"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaStandUp" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaStandUp"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAC0UlEQVRoQ+2YvUokQRDHe9IF8UC420RZVxA5MBHEVPBAMfYlbkPxMcTQewljUVAwFcFEEBFuPTTxDoQTwXSkmq2hp52ZLqpqttd1Jll2+mP6V/+q6upOzJg/yZjzmQbwoyssVnCh3Ul9I9w8/mHNqzkXrom1EBxctCBs8yH9vqF212hcg8EctQH6qu7t7+Zebfd2yN4/koA+0OLySg7o6uKcDDxSgC7YzPx3Mzk5YUGmpr7kgJ6e/tv/z88v5v72OmsrUnbkAAEMnm53muSG/f6D7QegIwUIi3KTB6gHcFQwnx5AfUiJeuIk4wMenByy4RAWILd+bGbs8QG/fU1N0jJS9VzATMX01dz8/SfK9KLBCwBn/aBlNNR7p2L6al9JIMWAB6dnmTtxY68oFvHd1tpqHEBQ7/Lut4GY0QIrAoW5l2bn2JBsBRGQtA8IOzWAFQZsFCwzzqdwUYCHRFPnA/En2SrYLmqrmME+WBekFE5cqo09oKsiVDOX/SsVb13qLhqjUMWIFcwBDko2KaQLJ4k9tLQoBnGSrCYdQLoyhoAtkPsMlNOA01fQd9CkRXNZB8ofICm0xYA55WgorF4SSLaLUuD2fu1boO2fvUKwULs7iAupBoiLdRe1urFOUuzs6PhdP98o0QARjApDIjbGIDSCRgXUhkMjAGRUQFCvLjgfcvgKtjspXDQNBbC3Y7i3a/wk0wBS00l1PxuHsRSEgriuoxJi2yNT0hq+i2KhPQxAboJRKdUaQGEoSq4MVRTUPOj6tsCzYTQXtXHY7qShMx9XRADk7n/4TfY+iBPUeX0odU+xi2ImhV/tZKNxo6YK6LohFxahNM6Bqi5aGmMf/crCddHKRFIGWnEXg/NJMmhtLurDli2Scu3RAAb2IPE2EXLTkAJVKobGUvbXBpBipTIVqApIx1etUUXBMjeVAFLHhgRQAwx9KFZ7AxjL8lrffQNEM7BIy5X0xQAAAABJRU5ErkJggg=="
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
      height="57"
      viewBox="0 0 56 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect y="1" width="56" height="56" fill="url(#patternPandaUp1)" />
      <defs>
        <pattern
          id="patternPandaUp1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaUp1" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaUp1"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAC1UlEQVRoQ+2YTUsjQRCGe66BRUHQXJRshEUEL8LiNaCwsuf8ic1R8jOWHPVPeF4UdsGrCF4ECYJZ0Yu7ENggeB2pJjX0tJOZoqrmI9mZizjT3emn3reqPwKz4E+w4HymBpx3hcUKbjVboR+E4fMDa1zNsXBOrIlg56QJ4Tcf0m+b9d0NGjdgMEZugL6qg+PvsVdHvT7Z/ZUE9IF2Pu/FgG6uLsnAlQJ0wTY+bZulpQ8WZGVlOQY0Hv+z/08mL+bx7jb6lqRs5QABDJ52e51kw9HoybYD0EoBwqTc4gHqARwVzKcHUB9Sop64yPiApz9/sOEQFiC7B18j9vIB11ZDEzSMVD0XMFIxfDXDP39FlV7UeQvgrA8aRkO9dyqGr/aVBFIMePrrIrITN/eSchHfdfc75QCCete/7w3kjBZYEiiMvftxkw3JVhABSeuAsFENmBLAWsFZwfkvLArwUGjyfCD/JEsF26J2FzNdB/OClMKJt2oLD+iqCLuZ69GNilt32zvGKOxixArGAKdbNimkCyfJPYy0KAdxkGhPOoV0ZcwCtkDuM1VOA05fQd+gQYNmWQfK7yDZaIsBY8rRUFitJJBsi1LgBifHFujoWy8RLOu724kLqQaIk3Un1Tn8QlLs4uz8XTs/KKUBIhgVhkRsjEFoBC0VUBsOgwCQpQKCennB+ZDFK9hshXDRVAhgr2+4t2v8IlMDUstJejubh2UpCBvivI5KiG2PTEGjeIviRrsIQG6BUdmq1YDCVJRcGaooqHnQ9WOBZ8PSLGrzsNkKs858XBEBkLv+4W+y10EcIM/rQ6k9xRbFSgp/tYuNxo2aKqBrQy4sQmmcA1UtOjPH5v3KwrVoaiGZBZpyF4PjSSpobhalWoxy7VE6YJaKaROce0BK9NMgKf2z1ljxOuiuh1Rruu3mBjArkmnfZ0FWSkFtQA04lSoqASuir1oOFjFZzm8sPOAbguCoSMNxmCUAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

function UserUp2() {
  return (
    <svg
      width="56"
      height="57"
      viewBox="0 0 56 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        imageRendering: "pixelated",
      }}
    >
      <rect y="1" width="56" height="56" fill="url(#patternPandaUp2)" />
      <defs>
        <pattern
          id="patternPandaUp2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaUp2" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaUp2"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACzklEQVRoQ+2YvUoDQRDH99qARBA0jRIjiAg2gtgKCoq1L2HKkMcQS30Ja1FQsBUhjSAiGEUbFQRFsD2ZJXPsrfexzMzm4nnXiHe7m/nNf2Z2dgNV8icoOZ+qAP+6wmwFFxrN0HbC7csjaV3JtdAmkiE4Ockg/GZD2mPzvptOozoM1vAGaKu6f7AXe9Vpd52jfyQBbaClldUY0PXVpTPwSAGaYDPzi6peH9MgExPjMaD39w/9/+fnl3q6u4m+JSk7coAABk+rNe0Uhv3+sx4HoCMFCEaZxQPUAzhXMJseQG1IjnrsImMDHp0dk+EQFiB3NrYj9uIBpyZDFdQUVz0TMFIx/Fa3r2+sSs+avABwOg5qSkK9XyqG3/oVB5INeHR+EYUTNfeSchHf7ayvFQMI6vUe7hXkjBRYEiisvTw7R4YkK4iATvsAc1AFmOHASsE05/yLEAV4KDQ+H8g/zlZBDlHdxQz2QV+QXDh2q1Z6QFNF6GZ6/WuRaF1uLSkl0MWwFYwBDlo2LqQJx8k99DQrB3GRqCcdQJoy5gFrIPMZKCcBJ6+gHaBBzS1kDSh7AqfRZgPGlHNDIY3iQJJD1AVu//BAA3V224lged/NSVRIMUA01jRqbWvTSbGLk9Nf42ynFAaIYK4wTsRKKYRG0EIBpeHQCQBZKCCo5wvOhhy+go1mCBdNQwFsdxX1do1eZCpA13KSPU7nYVEKQkPs66iE2PrIFNSGH6LYaA8DkFpgRFq1CpCZipwrQxEFJQ+6ti/wbFhYiOo8bDTDvDMfVUQApO5/+JvkfRAX8Hl9yA1PdohiJYW/0sVG4kZNFNAMQyosQkmcA0VDNDXH/vqVhRmimYUkDTTjLgbX41RQbyFqw2YZmXf1UWpALpyIgnlh6mJkmoouc/P2WPY+KAGYtIYEnHcFpYzMUynru4iCaSqWCpDjZZ9zxRT0aSRn7dID/gBC/qhIUwJBJwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
