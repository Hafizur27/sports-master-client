

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-6">
            <h4 className="text-yellow-400 mb-4">{subHeading}</h4>
            <h2 className="text-3xl uppercase border-y-4 p-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;