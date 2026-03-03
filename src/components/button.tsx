import React from "react";
import Icon from "./icon";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";

export const ButtonVariants = cva(
  "flex items-center cursor-pointer justify-center transition rounded-lg groupe gap-2",
  {
    variants: {
      variant: {
        primary: "bg-grey-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);
export const ButtonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-grey-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
export const ButtonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof ButtonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={ButtonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={ButtonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
