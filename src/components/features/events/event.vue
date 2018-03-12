<template>

    <div>

        <div class="event p-4">
            <p>Thursday, February 22</p>
            <h1 class="display-3">Harry Potter Watch-party</h1>
            <p class="lead">
                We're going to watch all the Harry Potter movies - in one sitting. That's right: settle-in
                for a dozen hours of magic. This might look a little stretched-out on a wide screen.
            </p>

            <div class="align-items-center event__host row">

                <div class="col-3 col-sm-2 col-md-2">
                    <img class="img-fluid rounded-circle" src="https://placehold.it/128x128" alt="">
                </div>

                <div class="col-9 col-sm-10 col-md-10">
                    <p class="event__host__name">
                        Hosted by <a class="bold" href="#">Michael Schofield</a> <br>
                        Young Adult Librarian
                    </p>
                </div>

            </div>
        </div>

        <div class="card rounded-0">

            <div class="card-body d-flex justify-content-center">

                <div class="align-self-center col-sm-4">
                    When
                </div>

                <div class="col-sm-8">
                    Thursday, February 22, 2018 <br>
                    6:00 a.m. - 6:00 p.m.
                </div>
            </div>

        </div>

        <div class="border-top-0 card rounded-0">

            <div class="card-body d-flex justify-content-center">

                <div class="align-self-center col-sm-4">
                    Where
                </div>

                <div class="col-sm-8">
                    Macon County Public Library <br>
                    1000 Address St., ...
                </div>
            </div>

        </div>

        <img class="img-fluid w-100" src="https://placehold.it/500x251" alt="">

        <div class="event__details p-4">

            <h2 class="display-5">Details</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Accusantium animi, aperiam aut</a>
                consectetur culpa illo ipsum nam omnis pariatur placeat quaerat qui sapiente tempora tempore tenetur, ullam unde
                vitae voluptatum!
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Accusantium animi, aperiam aut</a>
                consectetur culpa illo ipsum nam omnis pariatur placeat quaerat qui sapiente tempora tempore tenetur, ullam unde
                vitae voluptatum!
            </p>

            <h2 class="display-5">Register</h2>
            <p>Registration form or instructions here.</p>

        </div>

    </div>

</template>

<script>
    export default {
      name: 'Event',
    };
</script>

<style lang="scss">

    .event, .event__details {
        background-color: white;
    }

</style>