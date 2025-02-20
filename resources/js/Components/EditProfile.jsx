import EditUserLayout from "@/Layouts/EditUserLayout";
import Input from "./Input";
import PropTypes from "prop-types";
import SolidButton from "./SolidButton";
import { useState } from "react";

export default function EditProfile(props)
{
  return (
    <EditUserLayout>
      <label htmlFor={props.option}>{props.option}</label>
      <Input InputId={props.option} InputType="text"/>

      <label htmlFor="password">Password</label>
      <Input InputId="password" InputType="password"/>

      <div className="flex gap-10 my-3">
        <button type="button" className="cursor-pointer" onClick={() => setIsHidden(prev => !prev)}>Close</button>
        <SolidButton ButtonType="submit" ButtonText="Confirm"/>
      </div>
    </EditUserLayout>
  ) 
}