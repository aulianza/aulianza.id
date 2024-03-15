import { BiLeftArrowCircle as BackButton } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';

import Button from '@/common/components/elements/Button';
import MDXComponent from '@/common/components/elements/MDXComponent';

interface AiResponsesProps {
  response: string;
  isAiFinished: boolean;
  onAiFinished: () => void;
  onAiClose: () => void;
}

const AiResponses = ({
  response,
  isAiFinished,
  onAiFinished,
  onAiClose,
}: AiResponsesProps) => {
  return (
    <>
      {response ? (
        response?.includes('```') ? (
          <MDXComponent>{response}</MDXComponent>
        ) : (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(response)
                .callFunction(() => {
                  onAiFinished();
                })
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        )
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'Oops! The AI seems to be lost. \u00A0 😵‍💫 \u00A0\u00A0',
              )
              .pauseFor(1000)
              .typeString('<br/><br/>')
              .typeString(
                `Looks like the AI has gone on an unscheduled vacation to the Land of Confusion. Hope it brings back some souvenirs of clarity!. \u00A0\u00A0`,
              )
              .pauseFor(1000)
              .typeString('<br/><br/>')
              .typeString('Please try again later. \u00A0')
              .callFunction(() => {
                onAiFinished();
              })
              .start();
          }}
          options={{
            delay: 10,
          }}
        />
      )}

      {isAiFinished && (
        <div className='mt-6 flex justify-center transition-all duration-300'>
          <Button
            onClick={onAiClose}
            data-umami-event='Click Back from AI Response'
          >
            <BackButton />
            Back
          </Button>
        </div>
      )}
    </>
  );
};

export default AiResponses;
