import "./productsContainor.css"

import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ProductContainor() {


    const [data, setData] = useState([])
    // console.log(data,"data   ......");

    const [filterData, setFilterData] = useState([])
    console.log(filterData);


    useEffect(() => {
        fetch('https://dummyjson.com/recipes').then(res => res.json()).then(res => {
            setData(res.recipes)
            setFilterData(res.recipes)

        }).catch(err => console.log(err)
        )
    }, [])


    function filterHandler(cuisine) {

        if (cuisine) {
            const filteredData = data.filter((recipe) => recipe.cuisine === cuisine)
            setFilterData(filteredData)
        }
        else {
            const filteredData = data.map((recipe) => recipe)
            setFilterData(filteredData)
        }

    }

    function searchFilter(keyWord) {
        // console.log(keyWord);
        const searchFilterData = data.filter((recipe) => recipe.cuisine.toLowerCase().includes(keyWord.toLowerCase()) || recipe.name.toLowerCase().includes(keyWord.toLowerCase()) || recipe.difficulty.toLowerCase().includes(keyWord.toLowerCase()) || recipe.mealType[0].toLowerCase().includes(keyWord.toLowerCase()))
        // console.log(searchFilterData);


        setFilterData(searchFilterData)



    }

    return (
        <div  id="mainDiv">

            <h1 id="mainHeader">RecipeTeller</h1>

            <div id="contectDiv">

                <div id="btns" >
                    <Button  onClick={() => filterHandler("")}>All</Button>
                    <Button  onClick={() => filterHandler("Italian")}>Italian</Button>
                    <Button  onClick={() => filterHandler("Asian")}>Asian</Button>
                    <Button  onClick={() => filterHandler("American")}>American</Button>
                    <Button  onClick={() => filterHandler("Mexican")}>Mexican</Button>
                    <Button  onClick={() => filterHandler("Pakistani")}>Pakistani</Button>
                    <Button  onClick={() => filterHandler("Japanese")}>Japanese</Button>
                    <Button  onClick={() => filterHandler("Korean")}>Korean</Button>


                </div>


                <div id="mainRight">

                    <div id="sreachBarDiv">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => searchFilter(e.target.value.toLowerCase())}
                            />
                        </Form>
                    </div>






                    <div id="cardContainor" >

                        {filterData.map((recipe) => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={recipe.image} />
                                    <Card.Body>
                                        <Card.Title>{recipe.name}</Card.Title>
                                        <Card.Text>MealType:  {recipe.mealType}</Card.Text>
                                        <Card.Text>PrepTimeMinutes:  {recipe.prepTimeMinutes}</Card.Text>
                                        <Card.Text>Cuisine:  {recipe.cuisine}</Card.Text>
                                        <Card.Text>Difficulty:  {recipe.difficulty}</Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </div>


            </div>




        </div>
    )
}