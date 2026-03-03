import React from "react";
import Text from "./text";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";


export const BadgeVariants = cva("inline-flex items-center justify-center rounded-full",
    { variants: {
        variant:{
            none: "",
            primary: "bg-green-light",
            secondary: "bg-pink-light"
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants:{
        variant: "primary",
        size: "sm"
    }
})

export const BadgeTextVariants = cva("",{
    variants:{
        variant:{
            none: "",
            primary: "text-green-dark",
            secondary: "text-pink-dark"
        }
    },
    defaultVariants:{
        variant:"primary"
    }
})
interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof BadgeVariants>{
loading?: boolean;
}
// eslint-disable-next-line react-refresh/only-export-components
export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export default function Badge({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: BadgeProps){
     if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          BadgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }

    return <div className={BadgeVariants({variant, size, className})} {...props}>
        <Text variant="body-sm-bold" className={BadgeTextVariants({variant})}>
            {children}
        </Text>
    </div>
}