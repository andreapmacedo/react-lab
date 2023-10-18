import { StyledSelect } from './styles';

type SelectBoxProps = {
  options: string[];
  onChange: (selectedValue: string) => void;
};

export const SelectBox: React.FC<SelectBoxProps> = ({ options, onChange }) => {
  return (
    <StyledSelect
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};