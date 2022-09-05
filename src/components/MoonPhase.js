import {
  WiMoonNew,
  WiMoonWaxingCrescent2,
  WiMoonWaxingGibbous1,
  WiMoonWaxingGibbous6,
  WiMoonFull,
  WiMoonWaningGibbous1,
  WiMoonWaningGibbous6,
  WiMoonWaningCrescent4,
} from "react-icons/wi";

const moons = {
  "New Moon": <WiMoonNew />,
  "Waxing Crescent": <WiMoonWaxingCrescent2 />,
  "First Quarter": <WiMoonWaxingGibbous1 />,
  "Waxing Gibbous": <WiMoonWaxingGibbous6 />,
  "Full Moon": <WiMoonFull />,
  "Waning Gibbous": <WiMoonWaningGibbous1 />,
  "Last Quarter": <WiMoonWaningGibbous6 />,
  "Waning Crescent": <WiMoonWaningCrescent4 />,
};

const MoonPhase = ({ phase }) => moons[phase];

export default MoonPhase;
