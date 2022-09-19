export function Button({ description, onClick }) {

    return (

        <button
            className="bg-blue-900 rounded-md px-10 py-2 text-white"
            onClick={onClick}
        >
            {description}
        </button>

    )
}