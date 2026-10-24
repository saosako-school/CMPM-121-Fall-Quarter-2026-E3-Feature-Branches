# Plans for Creating the Face

## A: Geometry - explored (in branch A)

The 100+ shapes will depict a guy with a neutral expression, two open eyes, spiky hair, and plenty of freckles.

likely the simplest to implement for me

I wanted to add the spiky hair by creating triangles along the curve of the ellipse. Unfortunately, computers are not very good at calculating irrational numbers (and I needed to calculate the tangent of an angle to find the points along the ellipse) so I would end up with numbers that were horribly incorrect due to how floats work. I trashed the spiky hair idea because of this, and only created the freckles.

## B: Assets - explored (in branch B)

The multiple assets will be arranged in a way that is likely to be somewhat unsettling. Features will be layered on top of one another to create a face. So for example, the bottom layer will be a "base" and only exists to give the shape of a face. Eyes from another asset will be placed on top of this base, the nose from another asset will be placed over the base, and so on. Altogether, this will create the image of a smiling person with blue eyes and a tapered fade.

will create the strongest visual impression

I realized none of my friends had a tapered fade, and I wanted to create the face out of features from my friends, so I scrapped the idea for the haircut.

## C: Color and Curves - explored (in branch C)

The color and curves will depict a person with a large frown (like this: D:) gradient hair that is shaded from red to yellow, and gradient eyes that will be shaded from green to blue.

the gradients will create a pretty visual and add some nice color to look at

I wanted to create gradient hair, but due to the struggle I had to calculate points along the ellipse with A, I decided against anything that may require me to calculate anything with respect to the ellipse itself. After creating the mouth, I realized that it would look interesting to give the mouth a gradient from red to black to give it more depth. The gradient took so much time and effort that I decided against making the eyes gradient as my current changes already met the requirements for the assignment.
