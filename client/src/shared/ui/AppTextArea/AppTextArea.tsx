import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppTextArea.module.scss'
import { ChangeEvent, TextareaHTMLAttributes, useEffect, useRef } from 'react'

type HTMLTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface AppTextAreaProps extends HTMLTextAreaProps {
    value: string
    onChange?: (value: string) => void
    className?: string
}

export const AppTextArea = (props: AppTextAreaProps) => {
    const {
        className,
        value,
        onChange,
        ...otherProps
    } = props

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const onResizeHandler = () => {
        if (!textAreaRef.current) {
            return
        }

        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
        onResizeHandler()
    }

    useEffect(() => {
        onResizeHandler()
        window.addEventListener('resize', onResizeHandler)

        return () => {
            window.removeEventListener('resize', onResizeHandler)
        }
    }, [])

    return (
        <textarea
            ref={textAreaRef}
            value={value}
            onChange={onChangeHandler}
            maxLength={160}
            className={classNames(cls.AppTextArea, [className])}
            {...otherProps}
        />
    )
}