export function PostImage({ src = "https://bit.ly/3rpUTxv", title = "Title example", alt = "unique solution to your problem" }) {
    return (
        <div>
        <img src={src} title={title} alt={alt}/>
        </div>
    )
}