import React from "react"
import Icon from "./icon"
import { cva, type VariantProps } from "class-variance-authority"
import Skeleton from "./skeleton";


export const ButtonIconVariants = cva(`inline-flex items-center justify-center cursor-pointer transition group`, {
    variants:{
        variant:{
            none: "",
            primary: "bg-green-base hover:bg-green-dark",
            secondary: "bg-grey-200 hover:bg-pink-base",
            tertiary: "bg-transparent hover:bg-grey-200"
        },
        size:{
            sm: "w-6 h-6 p-1 rounded"
        },
        disabled:{
            true: "opacity-50 pointer-events-none"
        }
    },
    defaultVariants:{
        variant: "primary",
        size: "sm",
        disabled: false
    }
})

export const ButtonIconIconVariants = cva("transition",{
    variants:{
        variant:{
            none: "",
            primary: "fill-white",
            secondary: "fill-pink-base group-hover:fill-white",
            tertiary: "fill-grey-300 group-hover:fill-grey-400"
        },
        size:{
            sm: "h-4 w-4"
        }
    },
    defaultVariants:{
        variant: "primary",
        size: "sm"
    }
})

interface ButtonIconProps extends VariantProps<typeof ButtonIconVariants>, Omit<React.ComponentProps<"button">,"size" | "disabled"> {
 icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean; 
}

export default function ButtonIcon({
    variant,
    size,
    disabled,
    className,
    loading,
    icon,
    ...props
}: ButtonIconProps){
     if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={ButtonIconVariants({ variant: "none", size, className })}
      />
    );
  }
    return <button className={ButtonIconVariants({variant, size, disabled, className, })} {...props}>
        <Icon svg={icon} className={ButtonIconIconVariants({variant,size})} />
    </button>
}