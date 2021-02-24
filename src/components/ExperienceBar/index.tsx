import {
  BarContainer,
  BarContentText,
  BarLanding,
  BarLoading,
  BarLoadingText,
} from "./styles";

export default function ExperienceBar() {
  return (
    <BarContainer>
      <BarContentText>0xp</BarContentText>
      <BarLanding>
        <BarLoading style={{ width: "50%" }} />

        <BarLoadingText style={{ left: "50%" }}>300xp</BarLoadingText>
      </BarLanding>
      <BarContentText>600xp</BarContentText>
    </BarContainer>
  );
}
