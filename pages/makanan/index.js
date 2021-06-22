import React from 'react'

export async function getStaticProps(){
    
    return {
        props: {
            dishes: []
        }
    }
}

export default function Makanan({dishes}) {
    return (
        <div>
            swag
        </div>
    )
}
