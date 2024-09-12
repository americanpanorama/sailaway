import * as Styled from './styled';

const Tabs = ({ isTranscript, setIsTranscript }: { isTranscript: boolean; setIsTranscript: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <Styled.TabsContainer>
      <Styled.Tab>
        <input type="radio" id="tab1" name="tab-group" checked={isTranscript} readOnly />
        <label
          htmlFor="tab1"
          onClick={() => {
            setIsTranscript(true);
          }}
        >
          Transcript
        </label>
      </Styled.Tab>
      <Styled.Tab>
        <input type="radio" id="tab2" name="tab-group" checked={!isTranscript} readOnly />
        <label
          htmlFor="tab2"
          onClick={() => {
            setIsTranscript(false);
          }}
        >
          Original Scan
        </label>
      </Styled.Tab>
    </Styled.TabsContainer>
  );
};

export default Tabs;