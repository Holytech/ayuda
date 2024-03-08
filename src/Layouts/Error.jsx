import PropTypes from "prop-types";

const Error = ({ error }) => {
  return (
    <>
      <p className="w-full text-center py-2 my-3 bg-[#e64c95] rounded-lg text-white">
        {error}
      </p>
    </>
  );
};

export default Error;
Error.propTypes = {
  error: PropTypes.string,
};
