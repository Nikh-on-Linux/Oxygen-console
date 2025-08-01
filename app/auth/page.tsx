"use client";
import Brand from "@/components/blocks/brand.block.component";
import BrandLogo from "@/components/blocks/brand.logo.block.component";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input.ui";
import EmailIcon from "@/components/icons/email.icons.component";
import EyeOpenedIcon from "@/components/icons/eye.opened.icons.component";
import EyeClosedIcon from "@/components/icons/eye.closed.icons.component";
import PasswordIcon from "@/components/icons/password.icons.component";
import { Button } from "@/components/ui/button";

function AuthPage() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <section className="w-full font-sans h-full flex flex-col items-center justify-center overflow-hidden">
      <Brand />
      <Card className="w-full max-w-[23rem] border-border shadow-lg">
        <CardHeader>
          <CardTitle>Access portal</CardTitle>
          <CardDescription>
            Register or login to your account with this portal.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-2 flex flex-col">
          <label id="emailinput" htmlFor="emailinput">
            <span className="text-secondary-foreground focus:text-foreground text-[14px] ">
              Email
            </span>
            <Input
              rootId="emailinput"
              startIcon={
                <EmailIcon className="w-5 h-5 text-secondary-foreground" />
              }
              type="email"
              placeholder="e.g., john@example.com"
            />
          </label>
          <label htmlFor="passwordinput">
            <span className="text-secondary-foreground focus:text-foreground text-[14px] ">
              Password
            </span>
            <Input
              rootId="passwordinput"
              startIcon={
                <PasswordIcon className="w-5 h-5 text-secondary-foreground" />
              }
              endIcon={
                !isPasswordVisible ? (
                  <EyeClosedIcon
                    onClick={() => {
                      setPasswordVisible(!isPasswordVisible);
                    }}
                    className="cursor-pointer transition-all hover:text-foreground w-5 h-5 text-secondary-foreground"
                  />
                ) : (
                  <EyeOpenedIcon
                    onClick={() => {
                      setPasswordVisible(!isPasswordVisible);
                    }}
                    className="cursor-pointer transition-all hover:text-foreground w-5 h-5 text-secondary-foreground"
                  />
                )
              }
              placeholder="password"
              type={`${isPasswordVisible ? "text" : "password"}`}
            />
          </label>
          <Button
            className="mt-3 cursor-pointer hover:bg-primary/90 transition-all"
            size={"lg"}
          >
            Get Access
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <span className="w-full text-muted-foreground font-medium text-sm text-center">
            Or
          </span>
          <Button
            className="w-full flex flex-row items-center justify-center gap-3 cursor-pointer transition-all bg-secondary-background"
            variant={"outline"}
            size={"lg"}
          >
            <img
              className="image"
              data-alt-override="false"
              alt="G"
              srcSet="
                          https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw 1x,
                          https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw 2x
                        "
              width="20"
              height="20"
              loading="lazy"
              src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
            ></img>

            <span>Continue with Google</span>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export default AuthPage;
