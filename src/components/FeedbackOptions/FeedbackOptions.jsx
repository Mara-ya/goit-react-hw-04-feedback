import PropTypes from 'prop-types';
import { BtnList, BtnItem } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <BtnList>
        {options.map(option => {
            return (
            <li key={option}>
                <BtnItem value={option} onClick={() => {onLeaveFeedback(option)}} >
                    {option}
                </BtnItem>
            </li>
        )})}
    </BtnList>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}