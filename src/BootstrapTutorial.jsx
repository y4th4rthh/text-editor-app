import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, BookOpen } from 'lucide-react';

const BootstrapTutorial = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [expandedSubsections, setExpandedSubsections] = useState({});

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const toggleSubsection = (sectionId, subsectionIndex) => {
        setExpandedSubsections(prev => ({
            ...prev,
            [`${sectionId}-${subsectionIndex}`]: !prev[`${sectionId}-${subsectionIndex}`]
        }));
    };

    const sections = [
        {
            id: 1,
            title: 'Getting Started with Bootstrap',
            content: 'Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.',
            subsections: [
                {
                    title: 'Installation',
                    content: [
                        '• CDN',
                        '• npm',
                        '• Download files directly'
                    ],
                    example: `<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`
                },
                {
                    title: 'Basic Template',
                    content: ['Start with this basic HTML template for Bootstrap.'],
                    example: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`
                }
            ]
        },
        {
            id: 2,
            title: 'Layout',
            content: 'Bootstrap includes a powerful mobile-first flexbox grid system for building layouts.',
            subsections: [
                {
                    title: 'Containers',
                    content: ['Containers are the most basic layout element in Bootstrap.'],
                    example: `<div class="container">
  <!-- Content here -->
</div>

<div class="container-fluid">
  <!-- Full-width content here -->
</div>`
                },
                {
                    title: 'Grid System',
                    content: ['Bootstraps grid system uses a series of containers, rows, and columns to layout and align content.'],
                    example: `<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>`
                }
            ]
        },
        {
            id: 3,
            title: 'Components',
            content: 'Bootstrap comes with a wide range of custom-styled components for building responsive layouts.',
            subsections: [
                {
                    title: 'Navbar',
                    content: ['The navbar is a responsive and versatile navigation bar.'],
                    example: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
            </li>
            </ul>
        </div>
    </div>

</nav>`
                },
                {
                    title: 'Buttons',
                    content: ['Use Bootstrap’s custom button styles for actions in forms, dialogs, and more.'],
                    example: `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>`
                }
            ]
        },
        {
            id: 4,
            title: 'Utilities',
            content: 'Bootstrap includes a wide range of utility classes for fast and responsive styling.',
            subsections: [
                {
                    title: 'Spacing',
                    content: ['Use spacing utilities to modify an element’s margin or padding.'],
                    example: `<div class="p-3">...</div>
<div class="p-2">...</div>
<div class="p-1">...</div>`
                },
                {
                    title: 'Colors',
                    content: ['Use text and background color utilities to change an element’s color.'],
                    example: `<div class="text-primary">...</div>
<div class="text-secondary">...</div>`
                }
            ]
        },
        {
            id: 5,
            title: 'JavaScript',
            content: 'Bootstrap’s JavaScript plugins extend the framework’s functionality.',
            subsections: [
                {
                    title: 'Modal',
                    content: ['Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.'],
                    example: `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>  
        </div>
    </div>
</div>`
                },
                {
                    title: 'Carousel',
                    content: ['Use Bootstrap’s JavaScript carousel plugin to add a responsive image slider to your site.'],
                    example: `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
</div>`

                }
            ]
        },
        {
            id: 6,
            title: 'Customization',
            content: 'Bootstrap’s extensive list of variables and mixins provide customization options for every aspect of the framework.',
            subsections: [
                {
                    title: 'Sass Variables',
                    content: ['Use Sass variables to customize the look and feel of Bootstrap.'],
                    example: `$primary: #007bff;

$theme-colors: (
    "primary": $primary,
    "secondary": #6c757d,
    "success": #28a745,
    "info": #17a2b8,
    "warning": #ffc107,
    "danger": #dc3545,
    "light": #f8f9fa,
    "dark": #343a40
);`
                },
                {
                    title: 'Custom CSS',
                    content: ['Use custom CSS to override Bootstrap’s default styles.'],
                    example: `body {
                            color: #fff;
                            background-color: #000;
                        }`
                }
            ]
        },
        {
            id: 7,
            title: 'Conclusion',
            content: 'Bootstrap is a powerful and versatile frontend framework that can help you build responsive and mobile-first web projects.',
            subsections: [
                {
                    title: 'Next Steps',
                    content: ['Explore the official Bootstrap documentation for more information and examples.'],
                    example: `<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`
                }
            ]
        }

    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 pb-2">
                    Bootstrap Tutorial
                </h1>

                {sections.map((section) => (
                    <div key={section.id} className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-400 mr-2">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                        </div>

                        <div className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors duration-200"
                            >
                                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                                {expandedSections[section.id] ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {expandedSections[section.id] && (
                                <div className="p-4 border-t border-gray-700">
                                    <p className="text-gray-300 mb-4">{section.content}</p>

                                    {section.subsections.map((subsection, subsectionIndex) => (
                                        <div key={subsectionIndex} className="mb-4">
                                            <button
                                                onClick={() => toggleSubsection(section.id, subsectionIndex)}
                                                className="w-full flex items-center justify-between bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                                            >
                                                <h4 className="text-lg font-semibold text-white">{subsection.title}</h4>
                                                {expandedSubsections[`${section.id}-${subsectionIndex}`] ? (
                                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                                )}
                                            </button>

                                            {expandedSubsections[`${section.id}-${subsectionIndex}`] && (
                                                <div className="mt-4 pl-4">
                                                    <ul className="list-disc pl-6 text-gray-300 mb-4">
                                                        {subsection.content.map((point, pIndex) => (
                                                            <li key={pIndex} className="mb-2">{point}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-4">
                                                        <div className="flex items-center mb-2">
                                                            <Code className="w-5 h-5 text-blue-400 mr-2" />
                                                            <h5 className="text-sm font-semibold text-white">Example:</h5>
                                                        </div>
                                                        <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
                                                            <code>{subsection.example}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BootstrapTutorial;