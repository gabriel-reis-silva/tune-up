export default function Button({ children, colorButton, classNameButton }) {
    return (
        <button className={classNameButton + " btn"} style={{ backgroundColor: colorButton }}>{children}</button>
    );
}