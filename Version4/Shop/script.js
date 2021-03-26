const productDetails = [{
        name: "Airpods Pro",
        price: 24900,
        imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUVGBgYGBgYGBgYGBgYFRgYGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy41NTEBDAwMEA8QGhISHzEhJSE0NDQ0NDE0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0PTQ0NP/AABEIAQIAwwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAACAQMCAwQHBgMFBwUAAAABAgADBBESIQUxQRMiUWEGFHGBk5TTBzJCU1SRUqHjI0SxwvBDYoTB0eHxFjNygtL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgIBBAICAgMAAAAAAAAAAQIRAxIxBCFBUROhcYFhkRQyUv/aAAwDAQACEQMRAD8A8eiQEWaIEIQgBEiwgBCEIASWk0iAliks3FEk+xYTHUSVU9kjUSVBO6RwkPVPKTInlGoZboID5T0QjZ58kmiWhR8h+0vpQHgP2jaNPE0bahme2MVFHy82Z82V1oeQ/aIaHkP2nV2Ho67jONpDxHgbUxkjaRZIXrfc4uWRLZp17OSq0B4D9pRq0PATcr0cc5RuOW0SgmjvizPwZDoF8CZUqS3VWRULdqjLTRS7MwVFHNmPICeGaPqY3ZTYSB1lqohUlWBBUlWBGCrA4KkdCD0ldxOEkelMrQjsRZxo62V4GbApWH5l78Gj9WL2dh+Ze/Bo/VmLKa7cCtaiUtFVUbs0NQg6jqajbsxZXcABWqVGJXoukDIJjeIejtsNTpcBVCFhT2djhUOtSGJKZZgc4YFTtjlkmlYfmXvwaP1YdjYfmXvwaP1ZCl+twa3SrSVahqK3rCuWamiPUos4porAnQH0puTyqAg+EPD+Go9Z1rqtFWptoAqDSlRnSkhLFiSqs+ogn7oMrdjYfmXvwaP1YdlYfmXvwaP1YBrVvR22bLpcKqdwKMo7ECgHdsFhhi4PdPRxFqej9qSALjSCyqpOl3Y1OyCs/fACg1CTgZwD1mR2Nh+Ze/Bo/Vh2Nh+Ze/Bo/VgGhw7g1CtRpMXFJiKhfJ1VKjBwAaa6saQpyRgN3G55BE1DgdAoSLlcqupjpyTqp037qhjlF1kHYHY+G2V2dh+Ze/Bo/VkqmwH+0vfg0PqTUWl5MtC8RtFpPoV9Y0IwbYHvDJBUE6T5Z8OfOQoJOtSwH4734NH6keLix/MvPg0fqTvHJFcnKUGRosv2ySBbyxH47z4VH6kmp8Usl/FefCo/UnohnxxfdnmyYJyXY1aInSej9uHdQZx6cfsh+r+HS+pNCw9M7SkwYC6OP9ykP887z6vE4tJ/R8+XQ5nJOrV+z3S0oKqgASDitqrocgcp55R+2S1UAer3B8/7Mf5pFd/bBaupUULlc9f7M/5p8iLe12falBPG4144M7i1IK7AeMxK6x116W2bkki6Gf8Acpf/ALlJ+PWR63fw6X1J9ddXiru/o+Lj6HNHlV+yrcqI6w4m1BamhULumhajKDVok7F6L4yjFSw2PUHpGvxGxP47z4VH6kia6sT+O8+FR+pPLkzY5H08WGcOQ41xI3DhzTpUzoVWFNQodxu9R8feZmJOTyGB0ycqpNE1rD8y9+DR+pGs9gf9pe/BofUnHePg7qMnyZTQmg3qXSpefCpfUiTGyN6syoQhOZoIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQBIQhIAEWII4SgSEXEa3IwDuvQn7Oql8nrFSoKFvk4fGXqaThioJACggjUeoO0u+lHoTw6ha1a9vfmq9PSNAei+SzquMLggd7OfKdN9qNRrbhFtQokqjGlTbH4kWkW0k9clQT44niTKMTJT0j7Q/RO1tLK1r0EZXqsgcl2YENSLnYnA38J5uTPavtTtmqWHDqa/eepRRf8A5PS0j+ZmweBrYdhbW3C1ukYL6xcN2erc4Y94Es3NtOwAwBz2A+fogaenelHo9RsuMUBTtTcUaylxaqMguQ6FVB/CCFfB2Az0E76x4CLuk9O94Zb2ykDszTem7qSCMgqo0MuxyDvv77YPnMwHtnr32Wej9vVt76nc0qblKjIX0guoCEMUcjK8iRia/Bhw/i9lcU6VmtDsQVpnSodSVJpurLvnbcZPvzFg8LxO79C/s4qXtPt61QULffSxALuF+8y5ICrz7x8OU4Q/dz5T2z7X6jW/Dra3pZWmzKjBdgVp08qh8icH/wCsEOX9K/Qrh9va1K9vfGs6FF7MPSfJZwu+jBGMk+6edkx1OkSwVR3mIUe1jgf4z2vjHqXAqFBfVKdxWq51s4XUwQKaj6mVsbsAF2G/7geJRGbHtnrH2h+iNu4s7qzVaS3dSlSKhQEzXGqm4QbKcZyBz25b52fSe94ZwlaVk1klYOuqoSE1hM6S7MRlnJBwMjlzG0WU5H7UvRa2sUtWt0ZTV7TXl2bOkUyMajt948p54TPbvte4abirwy3Q47SpUQH+FW7EFt+eFyfdNk8IS2q0rShwlKtsQFrXDCmzZbuliG7z45t/LlAPnmE6r7SOAJZXz0qQxTdVqovPSr5BXPgGVseWJysECEISgIRIQBwEdiIIsAMRCsWEA9j9G+P2XErBbC+qCnURVVWZgpYoMJVpu22sDYg89+YM5z0t9ArS0talZL5atQFOzp5pgsGdVbYMSxCknbHKefkeMEUdMSA9e+0fjNMWfD2o1aTvRq0X0q6sQUpZGoA5G4AnQXfFqfEkStacW9TYKBUpkocHnhkdlIYHI1A4IE8DCgdBDSD0BihZ65wPjNKjxjTcXy3S+rdlTuGKaEqO6syEr3VzpYZz1AzvOo4O9C2vbmpX4klRq+Wp02qALSphs4yW0j7ygDbZTz3x8+bctvZECDlgftFCz2H7OOJUKa8SD1qSarioU1Oq6xh8FcnceyUvsX4hRpUbsVatOmWNPSHdVLYR84DHfnPKyBty8v8AtFYDrj3xRLGIvdHsns/BOPWPFbFbK+qCnWQKAzMqEsgwtWm7d0sRnK+bbY3njhiEZloWd/6U+hNtY0GuKd8tWsroadPNMFu+M90EliBvtjkZ1XHaVnx6hbut0lvVpZ1q+NShwvaKULDqgIblt5zxYIB0EQqDzAkotnqn2g+ltvT9TtbRlqpZ1aNVmUgpm3AVKYYbMcZJI2G3u2fSzhfDeKLSvTfLSRExU3XUyZLaCpIKOCSOR58jPERjkMeyIyjntFFPYftH9JaKvwy5t3SoKTvUKqylwhFI6WGTpJUMN+s3eI3qX2mvZ8Z9WUqA1M9mQCN90ZlZG335jb9/AQIFB4CKIbvptXZrxwbo3YQKqVyVIZdIYgadsBncbeE5+OxGmAEIGEoCEIQUcJqcA7MV1eqwVKeqqcgHUaalkQKSNRZgo05GQTMwRRBDpzUthdXFQlWo1bapUVQUVg9VFY0k2YI6uWUDBIC9ecu1LewqqGZ6agUrdVXWO1RlSgHVyGUMSGqAkJnKNuuADxmIoElCzsrO3sA61ENIOr/+21dlQIlzjtizHJfs9LBc4PeYKcaZY4iljXdWqPSC6aKq6Ve+76mD06iDOhNOCX0jTtuc4HDYjtPl75aJZ1JsLHT3jTDFT26rXYrQPZFl9W7x7cl8Agl8Hu9dQOMU7R7ymwqKaNRmNZlbB1gnusBkU0+4A4H3SW5jA5bTHBYomx0XFKlFLRqVHsxUqVKJqqlRnCFUclEfWQ1MNoO5YBnIySoIvXNvZ1Si02p1GoJUoqh/s1rslNXpszK2WQuK5L5XOUXIBzORCSSkWUhkZlYcipKsPYw3Euo2O1uLSyp6rZ3VELIKi69Tp36bMNRGr+LJPIA8sTGsmpU7v+zVAppBWLVaKim5066lCo7ugYYyAzMcFhkbYwSpOSd87kncknmSepiaI1Jsdbw6jY06lOoalKppdHFRnZWqVO0fWKlDP9nTChXU4G+ndtWBFUWwqur1ezTNG3qOadRy7u6NTrq2pmIqCoyOc7lUYnOczlikQpJqNjp6HDLDcNWpkCrTTUtQqzqj06ddjlj3GHaVVITYEd7YqM/idK09WVqSkVGwSBUBKNrcPTZWcsVCBMMEG++og4GPpiaZaNbHT39SkzVNTW72qI7WlJHRCG7uhXVcVA+ljq1bswO52MuWpsrZGKvQdnpIj6XfBX1mjrKBXLjVTZ9QyMhT3QMg8VogVkoKR1Ne0se+5FEaWusItYkVCoqNR0MlQ4p92mukgMS2QxBwslOw4caoAamqK+GDVWOtGWixZW1rhkL1QDnGKfJ2GG4/EMSUaOtaz4cGCAioF7LvCuA1UstQVAdTqoClabYBU8xqGoYmtzZdpRR3o/2OnFZHYKQL9wUCPkaezcvlstgA5I58UREIigdFxnh9vToLgKtTs7NkxULO5rW4qV9dPPcUFlKnA5/iz3eaMkYknJyTgDfJOFGAPYAAPICNwMc9+g8fHeANhCEAkWPxEEcJoy2GI9GwCNtxvsCdjnbPLfwjcSUY229u/P8A6RRhyGBY9VjgseqTaRhyG6I4JLFNPL/lHrTlSMuRClL/ALecd2ctLSzk45bnA5RwpS0Y3KnZROzl/sY/1RtOvSdIOktg6Q2M4J8fKXUbmZoxGGnNA0YxqUlDYoFI0pLrUoxkhxNKZTKRKQXPeUsMHYHSc42OcHkcHzxLDU5EyTDRtSK+mNxJWEYRM0dFIjxGkSVl6RuJDVj7a5em2pGKtpZcjH3WGGG/iJWIjyIhEhR1apqOcadgMIuF2AGQPE4yfMmEjxCUpKseBGrHqIRiTFUSZFiIJMizaRybBFk9OnHIn+vGWadObSOUpEaJLCU5YW3IOCNwcGWEozoonGUystGSrQl1LeWUtvKbUTk8hn9jsNht/PfrHaG0lNTaSdWnJ0lhsCV5Z85qpbRxtZrUzuYTW8jehNxrWQvbRqPkMJqEiqUcY5bjbHt6zZqUJVqUJzcTpHIZL05CirvqDYwcacZ1Y7uc9M85pVKUq1KcxKJ3jIzXSRMJeGVORjI8RkftKzrObR2iysREIkjCRkTDOiY0rGkR5jTIbTG5Hh/OENRhBSRZKhx4e/eRqI5DCObLVBMzTt+Hu3JT+0qWl1jG06Lh3GANjDyuPg6xwQlzIhpcHf8AhMuU+DP/AAmdBw7jFM7MP9e2bNG7pMNmX3yrPFll0MfDZyFPhTj8JlhOHMPwmdVrbmqqfZvEWqeqge6emLbXaj52XHji6ba/Rz9OyPgZZp2h8JvI2eg/aWUTyE3s14PPrB8P6MFLTykgspvpTH8Ikwor/DLuT4/TOXeylWrazsHtkPSU61mh6xuPiZx1W1lCrb46Ts63DQesoV+Dt0jZFWGXhHHVqMpVaU6y44U/hMu54e46GYbR0jCa5RzFWnKrpNu4tSOYxM2tT8pyZ3i2ZzJIGEu1KcrsvsE5tHZMgMYwjyI1plnSLGQhCDQ9Y9TI1jwYRiSLCNLVJ5SQyem3jnPT2+c0cmatvVxNG3uSOswaby7RqzShGXKMvJNcNnR0L5+jH95qUeKVPEH2kmcrRrTQoV5V02N8dvwc31WVduV/Pc6mjxN/4VP+vKXaPEz1T2YM5ihczQpXOJf8eS4m19nF9SnzFP8AVHSUuJDqre7BlylxJPEj2ic5TuvZLK3Q8B+0jw5lxJP8oLND1X4Nxr1D+IfzkTXKfxL+4mO9VD0Eru6dMj3xrnXpl3xPm0bTODyx7iJA+emZhO4HIt+//WVqlww5Ow98XmXMU/2WPwt/7NHRGo/hn2iATV95B/hOXa9ccnaV6nFKg/2n8piTyf8AH2e3DPFHmbf5R1FzwtD05+MwL7giZ2H7TNqcZq/x/wApSuOMVD+MzMXlvuvs9Ln07XP0NveEpk4OMZ5zCu7ErLde/Y9d5RuazEAlhvnkRnY43HSV7eqI3hppW3/RQaRmSNIzIzkkMqZBxjw/mMwhCC9xyn3+X/iPEiEcDAaJAZKrSKmwyNWSMjONjjrjPWOyOnLpKmc5Ito2d+mQP9D3SenUlBWkyPNpnKUTUp1MS5TrTFR5ap1J0jI4yibdKvLlO585gJWllLidVI4Sxm+l1J1upz63ElW5m9kY0ZvetSJ7qZIutufu8vGMa585NhozSe5lZ7iUXuJA9aRyNLGW3uJSqV5C9WV3qzm5HaMCSpWlSpUiO8gdpzs7xiDv0zK7mOZ4x+fj/wA5ls6pDDG6c58hk7/4eMUyNpzZ1iNhG5hBoAZJ4HxzIhHCCEgMeDIo4GCUSoY9WkIMUGVMw4llHlmnUAztnb9vMSgrRweaUjDiaC1ZKtaZqvHLUmlIw4GotbzkguJlCrHdrNbGfjNTt4rV5litFFWTcvxl9q0ierKZqxpqSbDQtNV8+XIe3nIXqbc//MgZ4xnkcjagSM8iZozVGlplyNqI7MnSzdlLqpIHMgbD3yrrnUcF9KmoUKlHQrB1OSQOZ2k5ErVUjl3kbGSO4JJxjPLGOfn/ADkJMh0SGkwhmEGgLE8/AD3DlCIIsEHAxY0R0AWLmNkyVFC4KA+fUSBJArjB2znkckad+eOvh74apFAGUmqJQ0k7XuhcLsSdWO8c9GbqB09pkA5E593UxA0WTUmLQDSLVDVFjUm1Q1SHVDVFjUmLxC8i1RMxZdUSl4gcjkSMjBx1B5g+UjLQJiwlQuYao3MDBRSY0tEg2OkAQmITCIYAsImYQUWEIQQI4RuYCAPzCNEUGAOhEzCALCESALCEIAkIsSALCJDMAWETMtVLCqqLVK9x8BSCrE51acqDqXPZvjIGdLY5QCtEJklag6EBlILKrL1yrKHDDHkQfKJTt3bRpR21toTCk6n2Ghdu83eXYeIkBETEMurw2qavYqgephiFR0fOlSzYZWKkgK22c7Y5yG5tHphC6ModFqKT1RiQrbcgSrc/CAQQkr2rqAWRhnGARhiCNQIXmVI31YxIpQJiEWEAITUF9Z/o6nzJ+nJaVxatnTY12xzxcMce3FLaA3RjQmr69Z/o6vzR+nD16z/R1fmj9OQGVmKJqevWf6Or80fpw9es/wBHV+aP04KZeYuZp+vWf6Or80fpxPX7P9HV+aP04Bm5hmaXr9n+jq/NH6cPX7P9HV+aP04Bm5hmai3tmf7nV+aP05ILi0/SVPmj9OVRb4MtpGPmGZtirafpKnzR+nJALPra1B/xJ+nNrHJkc4owIhM6ECz/AEtX5r+nHrTsv01X5r+nKsMvRl5Yryc2Z0Fl6UNTppS0ZVUChlfs6gwahLI4XKsdYHXAVgPvmWEt7I/3ar8z/Tki2dj+nrfM/wBOaXT5Hwvsy+oguX9Cf+tX59npJG5V/uEaCDQVlZaYyveGG1A9MSlcek9RmpMV3pVFqIpdjTwKdNChTbAPZ5yCMa2x4y+9jYj+71vmf6cja2sR/dq3zP8ATkfTZF4+wupxvh/RkWfE0oVVrUKbKV16Q9TXjXTKLuFX7pLHzyB0ydil6ZFW1i3UHuKoDkKqU6rVEQKVOy5CgjH3fcIWpWQ/u1X5r+nGMLP9LU+a/pyPDJeDayxfDJKHpfVQA4YuFpKXNVtR7LSBp2yoZUGRk7sx64nOXFXW7vgDUzNgchqJOB+82y9p+kqfNH6cY1a0/SVPmj9OZ+OSNbJmHCaxr2n6Rx/xJ+nCTVltGPPX/RilSWhpAoKFSm2qouoPrZQ+eo2J+6Ac9Z4+ZrW3H69NOzV8LjAyASBzA36A7jPKbxTSuzz9TilkS1rt7J/TBaYuqnZAhc5weYySVz56dOfPMw453LEsSSSckncknmSY2YbttnaEdYpc0ghCEhoIQhACEIQBUO8tU1J9krLgc/2kq1szpF1yZkmy4HxyhqldTJFedlI56l6yUO6IxwrOis23dUsATk7bAzXo8HVwrC4pqHzpDHU2B57EnGRuq94Yx1nO5jlMuz9mWl5R0lLgwIB9Zo7rnnuuwbvAkEDSyeYLYxkHElLhSEqvbrl0dtfcCDS1MLkFuWHcncHunHLfmgRHDHlNqT9mNV6Ohp8L1O1M1UUhUIc4Vcv31BDEH7mWIG4O3MYkbcIXBPrNLuqWIx1BICqASW3B36DB67Yrvnc7nmSdyfaZESJZSfsiivRsVuHKqVDrDOjOow6BSUZAF05JJZS7Ag4ATG55PXgQdtKVVAwhBJR+01LksiqRoHMBSSe6ckTBYxrN1Gx8RsZzbfs6JJeDfr8ApgErc0xoOlskNqICksgU7Lzxk+Az1nPXtPQ7pqDaWKhl+62OREhYiRM05Nv2dEgzCR64TlZuhsIQkKEIQgBCEIAQhCAEBCEoEgvOEIQLCyUQhOkTDJFiwhNoxIdHRITSIPzIzCEMDTIxCEyyoheRtCE5M6ojhCEwU//Z",
        qty: 10,
        heading: "Wireless Noise Cancelling Earphones",
        des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings."
    },

    {
        name: "Apple Watch",
        price: 40900,
        imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
        qty: 15,
        heading: "You’ve never seen a watch like this",
        des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass."
    },

    {
        name: "Macbook Pro",
        price: 199900,
        imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
        qty: 20,
        heading: "The best for the brightest",
        des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user."
    },

    {
        name: "iPhone 11 pro",
        price: 106600,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
        qty: 35,
        heading: "Pro cameras. Pro display. Pro performance",
        des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
    },

    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    },

    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    },

    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    },
    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    },
    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    },
    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    },
    {
        name: "iPad Pro",
        price: 71900,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        qty: 25,
        heading: "Your next computer is not a computer",
        des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
    }
];


const cartDetails = [];

//click events {
function addItem(event) {
    let btnClicked =
        event.parentElement.parentElement.parentElement.parentElement.parentElement;
    let noStocks = btnClicked.getElementsByClassName("out-of-stock-cover")[0];
    if (noStocks.style.display == "flex") return;
    let name = btnClicked.getElementsByClassName("product-name")[0].innerText;
    let price = parseFloat(
        btnClicked.getElementsByClassName("product-price")[0].innerText.replace("₹ ", ""));

    let imgSrc = btnClicked.getElementsByClassName("product-img")[0].src;
    SwitchBtns(btnClicked);
    let cartItem = {
        name,
        price,
        imgSrc,
        qty: 1
    };

    CartItems(cartItem);
    cartDetails.push(cartItem);
    RenderCart();
    CartItemsTotal();
}

function removeItem(event) {
    let btnClicked = event.parentElement;
    let itemName = btnClicked.getElementsByClassName("name")[0].innerText;
    let productNames = document.getElementsByClassName("product-name");
    cartDetails.forEach((item, i) => {
        if (itemName == item.name) {
            cartDetails.splice(i, 1);
            for (let name of productNames) {
                if (itemName == name.innerText) {
                    let found = name.parentElement.parentElement;
                    SwitchBtns(found);
                }
            }
        }
    });
    RenderCart();
    CartIsEmpty();
    CartItemsTotal();
}

function clearCart() {
    ToggleBackBtns();
    cartDetails.length = 0;
    RenderCart();
    CartIsEmpty();
    CartItemsTotal();
}

function qtyChange(event, handler) {
    let btnClicked = event.parentElement.parentElement;
    let isPresent = btnClicked.classList.contains("btn-add");
    let itemName = isPresent ?
        btnClicked.parentElement.parentElement.getElementsByClassName(
            "product-name")[
            0].innerText :
        btnClicked.parentElement.getElementsByClassName("name")[0].innerText;
    let productNames = document.getElementsByClassName("product-name");
    for (let name of productNames) {
        if (itemName == name.innerText) {
            let productBtn = name.parentElement.parentElement.getElementsByClassName(
                "qty-change")[
                0];
            cartDetails.forEach((item, i) => {
                if (itemName == item.name) {
                    if (handler == "add" && item.qty < 10) {
                        item.qty += 1;
                        btnClicked.innerHTML = QtyBtn(item.qty);
                        productBtn.innerHTML = QtyBtn(item.qty);
                    } else if (handler == "sub") {
                        item.qty -= 1;
                        btnClicked.innerHTML = QtyBtn(item.qty);
                        productBtn.innerHTML = QtyBtn(item.qty);
                        if (item.qty < 1) {
                            cartDetails.splice(i, 1);
                            productBtn.innerHTML = AddBtn();
                            productBtn.classList.toggle("qty-change");
                        }
                    } else {
                        document.getElementsByClassName("purchase-cover")[0].style.display =
                            "block";
                        document.getElementsByClassName("stock-limit")[0].style.display =
                            "flex";
                        sideNav(0);
                    }
                }
            });
        }
    }
    RenderCart();
    CartIsEmpty();
    CartItemsTotal();
}

function limitPurchase(event) {
    document.getElementsByClassName("purchase-cover")[0].style.display = "none";
    event.parentElement.style.display = "none";
    sideNav(1);
}

function sideNav(handler) {
    let sideNav = document.getElementsByClassName("side-nav")[0];
    let cover = document.getElementsByClassName("cover")[0];
    sideNav.style.right = handler ? "0" : "-100%";
    cover.style.display = handler ? "block" : "none";
    CartIsEmpty();
}

function buy(handler) {
    if (cartDetails.length == 0) return;
    sideNav(!handler);
    document.getElementsByClassName("purchase-cover")[0].style.display = handler ?
        "block" :
        "none";
    document.getElementsByClassName("order-now")[0].innerHTML = handler ?
        Purchase() :
        "";
}

function order() {
    let invoice = document.getElementsByClassName("invoice")[0];
    invoice.style.height = "500px";
    invoice.style.width = "400px";
    invoice.innerHTML = OrderConfirm();
    ToggleBackBtns();
    Stocks();
    clearCart();
}

function okay(event) {
    let container = document.getElementsByClassName("invoice")[0];
    if (event.target.innerText == "continue") {
        container.style.display = "none";
        document.getElementsByClassName("purchase-cover")[0].style.display = "none";
    } else {
        event.target.innerText = "continue";
        event.target.parentElement.getElementsByClassName(
            "order-details")[
            0].innerHTML = `<em class='thanks'>Thanks for shopping with us</em>`;
        container.style.height = "180px";
    }
}
//}

// button components for better Ux {
function AddBtn() {
    return `
<div>
  <button onclick='addItem(this)' class='add-btn'>Add <i class='fas fa-chevron-right'></i></button>
</div>`;
}

function QtyBtn(qty = 1) {
    if (qty == 0) return AddBtn();
    return `
<div>
  <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class='fas fa-chevron-left'></i></button>
  <p class='qty'>${qty}</p>
  <button class='btn-qty' onclick="qtyChange(this,'add')"><i class='fas fa-chevron-right'></i></button>
</div>`;
}
//}

//Ui components {
function Product(product = {}) {
    let { name, price, imageUrl, heading, des } = product;
    return `
<div class='card'>
  <div class='top-bar'>
    <i class='fab fa-apple'></i>
    <em class="stocks">In Stock</em>
  </div>
  <div class='img-container'>
    <img class='product-img' src='${imageUrl}' alt='' />
    <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
  </div>
  <div class='details'>
    <div class='name-fav'>
      <strong class='product-name'>${name}</strong>
      <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>
    </div>
    <div class='wrapper'>
      <h5>${heading}</h5>
      <p>${des}</p>
    </div>
    <div class='purchase'>
      <p class='product-price'>₹ ${price}</p>
      <span class='btn-add'>${AddBtn()}</span>
    </div>
  </div>
</div>`;
}

function CartItems(cartItem = {}) {
    let { name, price, imgSrc, qty } = cartItem;
    return `
<div class='cart-item'>
  <div class='cart-img'>
    <img src='${imgSrc}' alt='' />
  </div>
  <strong class='name'>${name}</strong>
  <span class='qty-change'>${QtyBtn(qty)}</span>
  <p class='price'>₹ ${price * qty}</p>
  <button onclick='removeItem(this)'><i class='fas fa-trash'></i></button>
</div>`;
}

function Banner() {
    return `
<div class='banner'>
  <ul class="box-area">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </ul>
  <div class='main-cart'>${DisplayProducts()}</div>

  <div class='nav'>
    <button onclick='sideNav(1)'><i class='fas fa-shopping-cart' style='font-size:2rem;'></i></button>
    <span class= 'total-qty'>0</span>
  </div>
  <div onclick='sideNav(0)' class='cover'></div>
  <div class='cover purchase-cover'></div>
  <div class='cart'>${CartSideNav()}</div>
  <div class='stock-limit'>
    <em>You Can Only Buy 10 Items For Each Product</em>
    <button class='btn-ok' onclick='limitPurchase(this)'>Okay</button>
  </div>
<div  class='order-now'></div>
</div>`;
}

function CartSideNav() {
    return `
<div class='side-nav'>
  <button onclick='sideNav(0)'><i class='fas fa-times'></i></button>
  <h2>Cart</h2>
  <div class='cart-items'></div>
  <div class='final'>
    <strong>Total: ₹ <span class='total'>0</span>.00/-</strong>
    <div class='action'>
      <button onclick='buy(1)' class='btn buy'>Purchase <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
      <button onclick='clearCart()' class='btn clear'>Clear Cart <i class='fas fa-trash' style='color:#bb342f;'></i></button>
    </div>
  </div>
</div>`;
}

function Purchase() {
    let toPay = document.getElementsByClassName("total")[0].innerText;
    let itemNames = cartDetails.map(item => {
        return `<span>${item.qty} x ${item.name}</span>`;
    });
    let itemPrices = cartDetails.map(item => {
        return `<span>₹ ${item.price * item.qty}</span>`;
    });
    return `
<div class='invoice'>
  <div class='shipping-items'>
    <div class='item-names'>${itemNames.join("")}</div>
    <div class='items-price'>${itemPrices.join("+")}</div>
  </div>
<hr>
  <div class='payment'>
    <em>payment</em>
    <div>
      <p>total amount to be paid:</p><span class='pay'>₹ ${toPay}</span>
    </div>
  </div>
  <div class='order'>
    <button onclick='order()' class='btn-order btn'>Order Now</button>
    <button onclick='buy(0)' class='btn-cancel btn'>Cancel</button>
  </div>
</div>`;
}

function OrderConfirm() {
    let orderId = Math.round(Math.random() * 1000);
    let totalCost = document.getElementsByClassName("total")[0].innerText;
    return `
<div>
  <div class='order-details'>
    <em>your order has been placed</em>
    <p>Your order-id is : <span>${orderId}</span></p>
    <p>your order will be delivered to you in 3-5 working days</p>
    <p>you can pay <span>₹ ${totalCost}</span> by card or any online transaction method after the products have been dilivered to you</p>
  </div>
  <button onclick='okay(event)' class='btn-ok'>okay</button>
</div>`;
}
//}

//updates Ui components {
function DisplayProducts() {
    let products = productDetails.map(product => {
        return Product(product);
    });
    return products.join("");
}

function DisplayCartItems() {
    let cartItems = cartDetails.map(cartItem => {
        return CartItems(cartItem);
    });
    return cartItems.join("");
}

function RenderCart() {
    document.getElementsByClassName(
        "cart-items")[
        0].innerHTML = DisplayCartItems();
}

function SwitchBtns(found) {
    let element = found.getElementsByClassName("btn-add")[0];
    element.classList.toggle("qty-change");
    let hasClass = element.classList.contains("qty-change");
    found.getElementsByClassName("btn-add")[0].innerHTML = hasClass ?
        QtyBtn() :
        AddBtn();
}

function ToggleBackBtns() {
    let btns = document.getElementsByClassName("btn-add");
    for (let btn of btns) {
        if (btn.classList.contains("qty-change")) {
            btn.classList.toggle("qty-change");
        }
        btn.innerHTML = AddBtn();
    }
}

function CartIsEmpty() {
    let emptyCart = `<span class='empty-cart'>Looks Like You Haven't Added Any Product In The Cart</span>`;
    if (cartDetails.length == 0) {
        document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
    }
}

function CartItemsTotal() {
    let totalPrice = cartDetails.reduce((totalCost, item) => {
        return totalCost + item.price * item.qty;
    }, 0);
    let totalQty = cartDetails.reduce((total, item) => {
        return total + item.qty;
    }, 0);
    document.getElementsByClassName("total")[0].innerText = totalPrice;
    document.getElementsByClassName("total-qty")[0].innerText = totalQty;
}

function Stocks() {
    cartDetails.forEach(item => {
        productDetails.forEach(product => {
            if (item.name == product.name && product.qty >= 0) {
                product.qty -= item.qty;
                if (product.qty < 0) {
                    product.qty += item.qty;
                    document.getElementsByClassName("invoice")[0].style.height = "180px";
                    document.getElementsByClassName(
                        "order-details")[
                        0].innerHTML = `<em class='thanks'>Stocks Limit Exceeded</em>`;
                } else if (product.qty == 0) {
                    OutOfStock(product, 1);
                } else if (product.qty <= 5) {
                    OutOfStock(product, 0);
                }
            }
        });
    });
}

function OutOfStock(product, handler) {
    let products = document.getElementsByClassName("card");
    for (let items of products) {
        let stocks = items.getElementsByClassName("stocks")[0];
        let name = items.getElementsByClassName("product-name")[0].innerText;
        if (product.name == name) {
            if (handler) {
                items.getElementsByClassName("out-of-stock-cover")[0].style.display =
                    "flex";
                stocks.style.display = "none";
            } else {
                stocks.innerText = "Only Few Left";
                stocks.style.color = "orange";
            }
        }
    }
}

function App() {
    return `
<div>
  ${Banner()}
</div>`;
}
//}

// injects the rendered component's html
document.getElementById("app").innerHTML = App();