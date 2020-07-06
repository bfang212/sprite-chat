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
      <rect width="56" height="56" fill="url(#patternPandaLeftStand)" />
      <defs>
        <pattern
          id="patternPandaLeftStand"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaLeftStand" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaLeftStand"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADHElEQVRoQ+2av07cQBDG91oeIKEBwUVCKFIalAdAAhGUmoJX4EqUx4go4RUoqCOCUuQBEA0SQpG4REkDPMC1RrO6scbj9Y4vfMutLdz51vbuz994/u0NXM+PQc/53Ctg1xWei4Lrb98U+sXdPjwmWUuSh8ZU93CDheolxcSfp4BMBri+uFJVaQpRgxOot/d/4OuBP5DW6+GKiTs6Oa6JeTj60ixwMYGrCAdk5Y6Ov7rltfc1mL3tz90HZLjhcKkG8/P8u/8tqCSbMfB7TKIgAW7ufgoqNR7/c39/3QQB6T4+Dg9GEHOFApJ5xtRrG1PpJextbeYJePbjmwuZZls4uq5UGaAiRMEycA8W3NX4usKyMfxQOdfjIfCsACUcLTYEyL9trL5zFActyLwAOaAXE3f1+64mCCkogfR5/gourhQxRdhESxUVcG8AJUjnTNRa8KyOJqtvkHPPWSBj1zKcz3ayCRNTRxNb+OnOx9JK9y8uG8NimcodjCAlFCQOtlXRCvbSNFH1IRQwFActKB7XppkdIKv4P5AER4cvpcA1IUxBVoISbsvhaFV9cp0AjuZJAsgAbRKAEhasHD8XDuhNlbtmurmkpRMFLuqb01O8HKCCCTmfTnTVKj1PqWALwBQqQhWUrULZftBqUYYSO5BKwgEZTHfUqA/D6ZcVG7ME1O1C3bagFMxSToKjIGEKcsOJFknqaUBuJFnqoSGhgNRw4iME6NuFxveXNaCVwehkuklNavkjSiVoJsP7EWUWE+jPcM5pKZk9IC0w1tnml6BB6T72vtk1fvWOUhOgNEtZImnnRC1GhCeFOhmOgW3gLG+aJSAt2nI0FhiNZ7038VxAdG0IM9GyTGrRmo+pyICo7ew8AUFbZ9A4qAvdWUyV4yM9g8IDsmzCKyjsT27GSAhtogyFTtPSKagICJS3zipDDUUwIv7xPEkVrDkTrvAj1T0SLp2CBNKyRZHCLOUzX1ZBI8qj1UunYAMIAYT+iIf0mnpqqIKVUKFmYnU6D9gE2StADSm/rV4oaFUMGjKFc0kSBy2weYzDncw8IGJzPgFgVSNXnigrMQAAAABJRU5ErkJggg=="
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
      <rect width="56" height="56" fill="url(#patternPandaLeft1)" />
      <defs>
        <pattern
          id="patternPandaLeft1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaLeft1" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaLeft1"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADG0lEQVRoQ+2aP24TQRSHx20OAGlAwUgoQqKJOECkoICoU3CFuIw4BkoZrpAidRQiCg4QpYkURUgYBA1wALeL3ii/0ezb2Zkx/o0za9jO8Xo9n7+38/5sRmbFj9GK85n/gEM3fCcGN+/fa/QPd/Prd5G1FLlozLqFG621T2lm9nUJyGKAm+sbbUu3EB04D/Xm5zf6eugXlPVauGZmDt8fdWQeTN72C25mdIt0QJg7PHpnHj552oHZe/F6+ICAG48fdGA+nX2wfwuaRBgT78ciBgVw+9XLoKnp9If5/vk6CCifw3GwP6GEKxVQwjNmLzenyo+wt7NdJ+DJx1MTCs1cODnPWSZYpBh0iXu0Zi6nVy2WrfGz1mv9fgi8KkAfThYbAsTfth49NpIHU5B1ASKhNzNz+fVLR4gY9IH06/oNrm80MSMIUWdRAa8MoA8yuBBNLXjejaaqexC15zyQsXMBZ6udatLE7UYTW/jx7nMXpW/OL3rToivl9ieUFoqSB3MtppK9H5qs/pAKGMqDKSi8r0OzOkBY/BtIgZPDtlLknpBmECak4E5tONqqLa4LwMn3FAEEQE4B4GDJ5nBdOqANVUzN9HBJq/MaXNY9p79ieYAKJrT5DGKq1pp5+gYzAEtYpBr0R4X++EHbkgoldjBN0gEBpidqModB+ZXKjVUC6nGhHltICZYy54OzIGkGMXCSRYo9DYhBUsoeG5IKKAMnHCFAOy5M3H9VA6YqGF1M99mUkT+jVaJWMnge4aqYwHwGNWfKZPWAssDYZBs/ggaVz2H3rW7wq58o9QH6Yem3SHpzkhEjYyelbjLIgTlwqd20SkBZdGqjSYHJ+1U+m8Cj6UUB2b0hL0S9FmkRSACyHmfTAF0fmPHsIRamzPCk5kHd6M5jEflRriHpgdk28Q16evyHMT6ENggodplGN9iyqEDx6KwF19MEM/IfvodqsA/QQaHDj3T3TLilGczJfWywuzEYIR0MYDJMA5Cl4IqEKNbvT9cEIPQfhjh3kIBa1D8LWNJe0RAN7SfaYmm4pQPmpAv2OfREz17gotf7A02bFVcA+nNJAAAAAElFTkSuQmCC"
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
      <rect width="56" height="56" fill="url(#patternPandaLeft2)" />
      <defs>
        <pattern
          id="patternPandaLeft2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imagePandaLeft2" transform="scale(0.0178571)" />
        </pattern>
        <image
          id="imagePandaLeft2"
          width="56"
          height="56"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADHElEQVRoQ+2av07cQBDG91oeIKEBwUVCKFIalAdAAhGUmoJX4EqUx4go4RUoqCOCUuQBEA0SQpG4REkDPMC1RrO6scbj9Y4vfMutLdz51vbuz994/u0NXM+PQc/53Ctg1xWei4Lrb98U+sXdPjwmWUuSh8ZU93CDheolxcSfp4BMBri+uFJVaQpRgxOot/d/4OuBP5DW6+GKiTs6Oa6JeTj60ixwMYGrCAdk5Y6Ov7rltfc1mL3tz90HZLjhcKkG8/P8u/8tqCSbMfB7TKIgAW7ufgoqNR7/c39/3QQB6T4+Dg9GEHOFApJ5xtRrG1PpJextbeYJePbjmwuZZls4uq5UGaAiRMEycA8W3NX4usKyMfxQOdfjIfCsACUcLTYEyL9trL5zFActyLwAOaAXE3f1+64mCCkogfR5/gourhQxRdhESxUVcG8AJUjnTNRa8KyOJqtvkHPPWSBj1zKcz3ayCRNTRxNb+OnOx9JK9y8uG8NimcodjCAlFCQOtlXRCvbSNFH1IRQwFActKB7XppkdIKv4P5AER4cvpcA1IUxBVoISbsvhaFV9cp0AjuZJAsgAbRKAEhasHD8XDuhNlbtmurmkpRMFLuqb01O8HKCCCTmfTnTVKj1PqWALwBQqQhWUrULZftBqUYYSO5BKwgEZTHfUqA/D6ZcVG7ME1O1C3bagFMxSToKjIGEKcsOJFknqaUBuJFnqoSGhgNRw4iME6NuFxveXNaCVwehkuklNavkjSiVoJsP7EWUWE+jPcM5pKZk9IC0w1tnml6BB6T72vtk1fvWOUhOgNEtZImnnRC1GhCeFOhmOgW3gLG+aJSAt2nI0FhiNZ7038VxAdG0IM9GyTGrRmo+pyICo7ew8AUFbZ9A4qAvdWUyV4yM9g8IDsmzCKyjsT27GSAhtogyFTtPSKagICJS3zipDDUUwIv7xPEkVrDkTrvAj1T0SLp2CBNKyRZHCLOUzX1ZBI8qj1UunYAMIAYT+iIf0mnpqqIKVUKFmYnU6D9gE2StADSm/rV4oaFUMGjKFc0kSBy2weYzDncw8IGJzPgFgVSNXnigrMQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
