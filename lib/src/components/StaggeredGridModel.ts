import React from "react";

export enum StaggeredItemSpan {
    Zero,
    Single,
    Full,
}

export enum StaggeredDisplay {
    Linear,
    Grid
}

export enum StaggeredAlignment {
    Start,
    Center,
    End,
}

export interface StaggeredGridProps<Type> {
    display?: StaggeredDisplay,
    columnWidth?: number,
    alignment?: StaggeredAlignment
    className?: string | undefined,
    items: Array<Type>,
    render: (item: Type, index: number) => React.ReactNode | undefined
}

export const StaggeredGridDefaultProps = {
    display: StaggeredDisplay.Grid,
    alignment: StaggeredAlignment.Center,
    columnWidth: 260,
    className: undefined
}

export interface StaggeredGridState {
    gridWidth: number,
    gridHeight: number,
}

export interface GridItemData {
    itemWidth: number | undefined,
    itemHeight: number | undefined,
    itemColumnSpan: StaggeredItemSpan
    update: (width: number, x: number, y: number) => void
}


//Staggered Grid Item Model

export interface StaggeredGridItemProps {
    spans?: StaggeredItemSpan,
    index: number,
    position?: number,
    onUpdatePosition?: (pos: number) => void,
    draggable?: boolean,
    style?: React.CSSProperties | undefined,
    className ?: string | undefined,
    children?: any
}


export interface StaggeredGridItemState {
    translateX: number,
    translateY: number,
    itemWidth: number
}