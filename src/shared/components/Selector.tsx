import Select from "react-select";

interface IProps{
    placeholder:string;
    options:[];
    onChange:(e:any) => void;
}

const Selector = ({placeholder, options, onChange}:IProps) => {
    return(
        <div className="z-index-0">
            <Select placeholder={placeholder} options={options} onChange={onChange}></Select>
        </div>
    )
}

export default Selector;