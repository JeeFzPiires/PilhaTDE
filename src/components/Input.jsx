export function Input({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            className="rounded-md mr-10 py-2 px-1"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}