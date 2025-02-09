import React from "react";

export interface Form{
    color : number,
    chatting: boolean,
    swimming: boolean,
    bathing: boolean,
    noTime: boolean,
    review: string,
    username : string,
    email: string

}
export interface FormWithList{
    color: number,
    timeSpent: boolean[],
    review: string,
    username : string,
    email: string
}
export interface Activities{
    swimming: string,
    bathing: string,
    chatting: string,
    noTime: string
}