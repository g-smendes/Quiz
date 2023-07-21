import { Questions } from "@/types/Question";
import { useState } from "react";

type Props = { 
    question: Questions;
    count: number;
    onAnswer: (answer: number) => void;

}
export const QuestionItem = ({ question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);


    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 1000);

        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.questions}</div>
            <div>
                {question.options.map((item, key) => 
                <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 
                    
                    ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                    ${selectedAnswer !== null &&  selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-500 border-green-800'}
                    ${selectedAnswer !== null &&  selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-500 border-red-400'}

                    `}

                >{item}
                </div>
                )}
            </div>
        </div>
    );
}