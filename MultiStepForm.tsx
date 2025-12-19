import { useReducer } from 'react';

type Step = 1 | 2 | 3;

interface FormState  {
 step: Step;
 name: string;
 email: string;
 password: string;
}

type Action =
| {type: 'NEXT_STEP'}
| {type: 'PREV_STEP'}
| {type: 'SET_FIELD'; field: keyof Omit<FormState, 'step'>; value: string};

const formReducer = (state: FormState, action: Action): FormState => {
 switch(action.type){
    case 'NEXT_STEP':
        return {...state, step: (state.step + 1) as Step};
        case 'PREV_STEP':
            return {...state, step: (state.step - 1) as Step};
            case 'SET_FIELD':
                return {...state, [action.field]: action.value};
                default:
                    return state;
 }
};

const MultiStepForm: React.FC = () => {
    const [state, dispatch] = useReducer(formReducer,{
        step: 1,
        name: ' ',
        email: ' ',
        password: ' ',
    });

   
     const handleChange = (field: keyof Omit<FormState, 'step'>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_FIELD', field, value: e.target.value });
    };

    const next = () => dispatch({type: 'NEXT_STEP'});
    const prev = () => dispatch({type: 'PREV_STEP'});

    return(
        <div>
            <h2>Step {state.step}</h2>

            {state.step === 1 && (
                <div>
                    <label>Password:</label>
                     <input type="password" value={state.password} onChange={handleChange('password')} />
                     <button onClick={prev}>Back</button>
                      <button onClick={() => alert(JSON.stringify(state))}>Submit</button>
                </div>

            )}
        </div>
    )
}

export default MultiStepForm;