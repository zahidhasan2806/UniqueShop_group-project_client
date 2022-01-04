import { useStars } from "stars-rating-react-hooks";
import { useForm, } from 'react-hook-form';

export default function ReviewStar() {
    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: "★",
        renderEmpty: "☆"
    };

    const {
        stars,
        getStarProps,
        getStarWrapperProps,

        selectingValue,
        selectedValue
    } = useStars(config);
    const { setValue } = useForm();
    console.log({ selectingValue, selectedValue });

    return (
        <div >

            <span
                {...getStarWrapperProps({
                    style: {
                        cursor: "pointer"
                    }
                })}
            >
                {stars?.map((star, i) => (
                    <span
                        key={i}
                        {...getStarProps(i, {
                            style: {
                                fontSize: "40px",
                                color: "gold"
                            },
                            onClick: (event, ratedValue) => {
                                // alert(`You just rated ${ratedValue} Stars!!`);
                                setValue("rating", ratedValue, {
                                    shouldValidate: true,
                                    shouldDirty: true
                                })

                            }
                        })}
                    >
                        {star}
                    </span>
                ))}
            </span>
        </div>
    );
}
