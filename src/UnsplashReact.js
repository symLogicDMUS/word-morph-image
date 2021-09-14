import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react"

const MY_ACCESS_KEY = "FACImHv41SdvWpGX2dWopBS_38yovOMPXCcMJhyB8Xc"

export default function UnsplashUploader() {
    return (
        <UnsplashReact
            accessKey={MY_ACCESS_KEY}
            Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}
            applicationName={"word to image"}
        />
    )
}