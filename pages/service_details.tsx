import React, {useState} from "react";
import {offers} from "../constatnt/data";
import {Carousel} from "primereact/carousel";
import {responsiveOptions, serviceClinic} from "../component/clinicData";


export default function ServiceDetails() {
    const [nodes, setNodes] = useState([]);
    return (
        <div className="grid grid-nogutter surface-section  text-800 mt-6">
            <div className="col-12 md:col-6 p-6 text-center md:text-left  align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">Create the screens your</span>
                    <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden  px-5">
                <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AvAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xAA5EAABBAEDAgQEBAQFBQEAAAABAAIDEQQFEiExQQYTUWEiQnGBFDKRoQdSscEVJGLh8CNygpLRM//EABkBAAIDAQAAAAAAAAAAAAAAAAADAQIEBf/EACERAAICAgEEAwAAAAAAAAAAAAABAhEDIRITIjFBBDJR/9oADAMBAAIRAxEAPwDaJQkTmoAc1P7JoTgLQAJ8XNa/wzqDXi/8u5eCSNBynNaK5pfQHiF7W6Lltftp0ZaQ4XYPB/ZeBGK8ut3JPQKki8DVaLhXHsj4kfwHfyj5nfp09yFv9G0+FjxTKaAP+falmvCeAWRtklb8TjZvm66D6LaYx8ger3H4W+pWDI9nSxxpBljxCzZGBvIprff3V3EHlNaCS53Vzj8x9UNwoSy5JCHSu4Ndh6BE4+ymJEy41yVzjSYAatdzSfehFbOHJSlgSNT3KEibKsooIfkj4rCJSi1QlASpodFgnLbuabWM1xohke4dPbra3GVRaVkvEmOZMd+z8wVF5GPaPO9Qyw3Ja7k88/8AP3XpH8NMXbgTZB4jfNYPcVx/cfovJs+KZ0+xwoiTn6L07+G88cmPLjmHIndC6z5cwsf+O4ce9LbFHOmenROAY1o7eykVLFnsAbnFvpIKe36q4DzScIHFIuXIACJ7UxqkCAFCUJAl7oABeLZ9mPiwi7lmp1C+NpH9SF49h4kkWvwRTxSRP80nbIwtNE8cFe6SHbmOl+HbExt2OxJv+ivHTNN1qbHdqEEcroJLju7BA62kTb5UacaThf4ZWBgx/LAHPSvsjGnxNNyONuPzH0UniHSTG50kIPx8Ma0flCysozAx7I5S4E8NLuWlZpQaezZGaa0bmPkWDfurcLuBa8ybqep4FtYyRzSOf9lbx/H7WRtZlQvikBt1j7FSkUbPTY3CqJTxRWWwPE2FltBZKDzVWjsWSC22u4KupFHFlo8JSSW2FWfNwTY6KhkatDjkl7ug9eityRHFsIyepIVGcg8g+yzOpeO8DHeY4tz9t9PXsEEm8V5Wp7hjY8kcf81Kr2WVo2U1OYS3kIDqcYcCD0IQmJmY4l0mRIHEdO1eilgMwcWPcXNPcpXEcm6MH4pxxBqcfl01xbuv/n3Wx/hXsfqEs7pA17GuFF1br4rnqgPi/FdJnwlrbJiIpbP+FeEcfHyi4D5WkfZaYPwjFNVbN5PCyVpcTtO0gP8AT/ZR4crpRufdgVfZ3uPZSeVHdiNn/qE+uQfstBmHWuSLkABWp4UbSnhADkqRKgCCWMOM46iSOj+6seH8r8TjQtme5xHwurvVKCZ2zc7/AEO/UC0mgwNhyI2X+aIO+6RmdNGrAu1mk1OMyYRo/EG0DS83z8WeDILHnbZteo5EZONQ9FlPFOmy5eBKIgPOrg+n091TKrYzBKrM3j4e+t8rge6dm6Fjyxl3mh5HqFnGax4h0x5xpo3yNb2lj3GvqK/RWYNV1jUJPJbF5e7gbISK+ptJ6b8mnqRforjAGLkfANoscjot5oD53xNbI667qpouhuhiMmX5kr5BtcJHW39EW0+IY7w0DgdPoimQ2mtF7KhdHCX2sJr8tzmwSelDuvQ9YO3Ftov4eiycmmtyA9/xBz2gBzeo+itJUykHaMxp+jtyZL2sZZvkI6/RvIaA2ZA8p2q6JmFvlOlhJ+Eln91DleLtRDTtxIgAAQS11/oFHBsvzighlB8Ljby7siWm4bn4kksgN22rQDw5FqmfqTMrUvjjNHYGbWj3H+69GixG7GtoU6gFVxadE9RNeDHY+ijV9VkbICIYSNzq6gXwPqtZiY2Np7mwaewRkkW1osfdEDjsh8xsLWtHQ0OpVXToTHLM9797i74TXQV0ToxfJITOa4Nl9cutctZzjly5daAAQKeCo0toAkDk7eobSgoAZqDqxJCPSv14RCFrBPpwhcB/lhyfekG1SYRwBp+a6+wJT4IyZ3RskJZ5W6MH5Tay5ZrlRqwQbjZvo3NfH8PZDZxskeT9h6qr4fzXymRko2ua7aR6FEsxgJDh17Jl842QlwlQH/w2CSUucxpcTanj0yFjrYzlPbKWSkuIq1O7JYW//EtKI+Tl6KOURGzYzgeypwUZ231HVO1HKAeL79FBgEulo9QUtvuGJVEL6uP8uB2LUBxnFgHHXva0GqtuBo/0rNeYYn18oKmfkjF9Qy2BmSy3MB9VXn0XFPJiaSruFNGGAE9VNI4EcUppNBuyhiYLWEgcNb2CuRxOL2OAG0FTRN2xOJ4LgpoAGQA+6vGCSsVPJb0CdfyW4eJuF9dtevqodCkfLp0c0gAfKXONfU1+wCg1Rj9S1ZuP8jGGQ/0H9U/QDt05sZ+ThWxbdi8zqKiFEqaCltPMpy5da60AAbS2mWutAD110m2ksk+yAK2pw/iMKWvzNG5v2TfD0jpciOMm3ANHPcWb/orZogg9OiH6MWY2v4tk7QSz9q/qFnzQtpmjDOk0azMx34epMnh/JKPjH+oBFHSebj7h1pVNZkDceOS+WuH7pcSYEDnh6lPjkaD7Y0wTqmbFHK0AgHuFTiznzP2R83+iTxPp84eZsf5+PoVT0t4he1kxLZD0vo76JE/tRsxtOCCmXif9D8QXW6Pkt62FT0zU8STJcGZMZI7NIJH2RiNzXNonhCNS0CB95EbA1/8AO0UUUQpemF8rU4HxFrpBYFBZn8UzJlEUZBt3NeipSQzB4jc/cO1dSiun4TcY7n1fdD35LRpaRfljfFH5kB3AfmbaTH1ESENsXYS5GXDDE50sjWMA5JQuCI5WoROxQ4NPxOvuB3UJ7D1s1Tp7AY3r0RERkQV6BDYI/LFu6n1V85AEX7LUvGzE3vQCw2zO1TKyHxHytnlMPSzfKTS4DixPhJunWPpfH7KfWspuLiulv0aPuq2C8uYXu4L6d+yrju6Xotmpxv2y/acCogU4G08ykgK60y0toAAWutMtdaAHkpdyjtdaAJLQbJjeJ8p8ZIc17XtI7HqipKpBw/EZUbuCQCL7ikjP9bNHx13Go83/ABTQvNZ+cM3V/qHULtHlLmMPy3YQfTJMjFjH4f4mPaNzPeuoVjw7kGSLY7hzXFpHpykympNMfGDipRNZPjsyYSx4HPf0Wc1vSG/hi025p7jij6rQwTfCAT2VfU5WOxXgkJ84xkrEY5yhKjzV3+IY7jGJpJCPR1H9E6XL1vFG/ZmhvQGtwP6WierYb3nfHd+rVRh1PJxPhe13H8vIWVNHUi00UHa9qk48trMgEdSyGifvSha7UH/EceYX80r6tGWeIZI+W8n3YquTnTZzx/0/LBPPcqzaLqkJpmnSZWSyTMfvZGbEY/Lfv6rdaTigkurkgD7IDpcQYxoqgP3Wt0va2AHuVOJcpGP5E+3RPJjgMBrlUsgBzgQeG9ley5KaGjqeEIzspkUBs89BSdldIzYU2zPeIJ35EroXcRsAoepJ4RTCI8vi1lJs05GTuf8Al88Fx9gQtZG5tWwgj2RhqiPkN2WA5O3KAO9E4OTzMThyduUIKduQAA3LrVYPv5ypWlryGl3VJ60R7+PJEheBySm+aPr9Antx4w769Fajij7BLfyHdUMj8eNW2D3TV0Y4obqEsvErIwHsBF9y3uFpDCw/Kh2bC0A/ClSyylpjo4oR2hNKzmy4rXNd8QAsKxpLy3KmcOhdaybHnEyXxA13YfY9kQ03UHRzBvvdpT/Ry/D0SJ7C0FzqBHVZ3xNq5xMzHjAJgkcWF/bdV/2V7EzRIzaSqXiDT49SwnwPsbuWEdWuHQj6JvN8RKguWyxiSxyM+LkH1VpmFiTcmJv6LBaPrj4nuxM47MiI7Xe/utVh6nG5vLxaiLryNkr8F6fSsT5Yx+yrnAxmC2tH6J51ONoNuCFahrcMLHu3ANaOSTQClsiKZbmyI8dhLnAAdz2RHw9qsWdiNlge1zC7aC03yvD/ABh4ufqe7EwHEQO/O/8An9h7LbfwhfK3w9GGig2d9pkFwXJisnf2o9OnlG8nuOAFmvEkhjgLrp3QD3KOlvlwlxPPUrHa3kOytRix28tYNx9vRUyS5MnHHiBI2HZM3sAa+6G4GTlYjt0ORKzjs4ohrGQMUSRg05wDVn35Z2E+pUwIyVRpGa9qDnUcp32ACuwavndfxDj+izulxOe0OPJPNrRYuJwCQiU2RHGvwvw63lgAOax/uRyrA1vIr/8ABh+5VZmM0KYQClHWkW6EBPw9dk10VdvurBcQaUL3G1UYOhmc0+VI7/tJTzK4EUaI7KnP+QevUJ3mF2N5nQgAqWrQv6sL4uS2YEdHAdFXzgNhtDppHRBuQw04VwO4VjImdJGCfmbaUMozWrs+dotzTaiw5mhzXdfRT554IQeN5F18ruFegs9A0t7HNaQea5ReQh0P0WS0bIeWtK0MUzi2kIpIxHjDD8qdmbGObqT6eqC/j5YI90cjgK4W61WBk7HskFgheY6oDjySwNNtjcQL9FaP4S3qxczxLnMsMkYT7hAM/U8zUDWVO57b4b0aPso8hxJJKTDYJJCHdk5JIU22y7o2lvzclkbW3uNcL3HwzhR6bpsGO0AbGc169/3WO8E4ELG+dVvBAHsto55jadqTOVsbBUgjn5NQ8uFd7WNy8tkWoSzXdtACuZ+VJI0sJoD0WVzp3B8j+7RwqrbJ8IoalkOzM55JsMvn3VSNpkmjb2tSxionnueqdhNAyWff+yavAp7ka7ScUNjHdHIowOyF6cabwi8TiaS3sYSBooJ1LrpJvKrRaz//2Q=="
                    alt="hero-1"
                    className="md:ml-auto  border-round-2xl block md:h-full w-full"
                />
            </div>
            <div className={"col-12 lg:col w-full lg:w-9 lg:ml-7 lg:-mt-4 p-6"}>
                <span className="block text-lg md:text-6xl font-bold ">You may also like this</span>

                <Carousel value={offers} itemTemplate={serviceClinic} numVisible={3} numScroll={1}
                          showIndicators={false} responsiveOptions={responsiveOptions}></Carousel>

            </div>
        </div>
    )
}
